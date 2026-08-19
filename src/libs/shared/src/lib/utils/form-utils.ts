import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { getFileExtension } from './file-utils';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Signal } from '@angular/core';
import { Nationality } from '../models';
import { DEFAULT_PASSWORD_MIN_LENGTH, SPECIAL_CHARACTERS_REGEX } from '../constants';
import { CountryCode, isValidPhoneNumber } from "libphonenumber-js";

export const passwordMatchValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  if (!password?.value || !confirmPassword?.value) return null;
  return password?.value === confirmPassword?.value ? null : { passwordMismatch: true };
};

export function passwordMinLengthValidator(minLength = DEFAULT_PASSWORD_MIN_LENGTH): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) return null;
    return value.length >= minLength
      ? null
      : { passwordMinLength: { requiredLength: minLength, actualLength: value.length } };
  };
}

export function passwordUppercaseValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) return null;
    return /[A-Z]/.test(value) ? null : { passwordUppercase: true };
  };
}

export function passwordLowercaseValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) return null;
    return /[a-z]/.test(value) ? null : { passwordLowercase: true };
  };
}

export function passwordNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) return null;
    return /\d/.test(value) ? null : { passwordNumber: true };
  };
}

export function passwordSpecialCharValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) return null;
    // return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value)
    return SPECIAL_CHARACTERS_REGEX.test(value) ? null : { passwordSpecialChar: true };
  };
}

export function preventSameValueValidator(
  firstControlName: string,
  secondControlName: string,
): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const first = formGroup.get(firstControlName)?.value;
    const second = formGroup.get(secondControlName)?.value;

    if (!first || !second) return null;

    return first === second ? { sameValue: true } : null;
  };
}

// Note: This custom validator take multiple form controls from them 'atLeastOneRequired' otherwise it should show error.
export function atLeastOneRequired(controlNames: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control || !controlNames?.length) {
      return null;
    }

    const hasAtLeastOneValue = controlNames.some((name) => {
      const ctrl = control.get(name);
      const value = ctrl?.value;

      return value !== null && value !== undefined && value !== '';
    });

    return hasAtLeastOneValue ? null : { atLeastOneRequired: true };
  };
}

export function dialingCodeSearchFn(
  term: string,
  item: { code: string; nameEn: string; dialingCode: `+${string}` },
) {
  // console.log("DC =>", term, item)
  const t = term?.toLowerCase();
  if (t.startsWith('+')) {
    return item.dialingCode.includes(t);
  }
  if (isNaN(+t)) {
    return item.nameEn.toLowerCase().startsWith(t) || item.code.toLowerCase().startsWith(t);
  }
  return item.dialingCode.includes(`+${t}`);
}

export function fileSizeInMBValidator(maxSize: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const file = control.value ?? null;
    if (!file) return null;
    if (maxSize <= 0) {
      console.warn('fileSizeInMBValidator: maxSize must be greater than 0');
      return null;
    }
    const BYTES_PER_MB = 1024 * 1024;
    const fileSizeInMB = Number((file.size / BYTES_PER_MB).toFixed(2));
    const maxSizeInBytes = maxSize * BYTES_PER_MB;

    return file.size > maxSizeInBytes ? { fileSizeInMB: { maxSize, size: fileSizeInMB } } : null;
  };
}

export function requiredFileType(types: string[]) {
  return function (control: AbstractControl) {
    const file = control.value ?? null;
    if (!file) return null;
    const extension = getFileExtension(file);

    if (!extension || !types.includes(extension)) {
      return {
        requiredFileType: {
          allowedTypes: types?.join(', '),
          type: extension,
        },
      };
    }
    return null;
  };
}

/*
Note: This helper function set the 1st option as default option for form control input
Note: This will update input field when input is null/''/undefined (At moment of only initialization we should use this)
Note: For disabled input this will avoid setting default 1st option
*/
export function setDefaultValueIfEmpty<TValue extends string | number, TItem>(
  control: FormControl<TValue | null>,
  items: readonly TItem[],
  getValue: (item: TItem) => TValue | null | undefined,
  index = 0,
): void {
  const isEmpty = control.value === null || control.value === undefined || control.value === '';

  const item = items[index];
  const value = item ? getValue(item) : undefined;

  if (!control.disabled && isEmpty && value != null) {
    control.setValue(value, {
      emitEvent: false,
    });
  }
}

export function minimumItemRequiredValidator(
  triggerControlName: string,
  getItemCount: () => number,
  minimumCount = 1,
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const shouldValidate = control.get(triggerControlName)?.value;

    if (shouldValidate && getItemCount() < minimumCount) {
      return {
        minimumItemRequired: {
          controlName: triggerControlName,
          requiredCount: minimumCount,
          actualCount: getItemCount(),
        },
      };
    }

    return null;
  };
}

export function duplicateValueValidator<T>(
  getItems: () => T[],
  getValue: (item: T) => string,
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value?.trim();

    if (!value) {
      return null;
    }

    const isDuplicate = getItems().some((item) => getValue(item).trim() === value);

    return isDuplicate ? { duplicateValue: true } : null;
  };
}

export function minimumAgeValidator(minAge: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const dob: NgbDateStruct | null = control.value;

    if (!dob) return null;

    const today = new Date();
    const birthDate = new Date(dob.year, dob.month - 1, dob.day);

    let age = today.getFullYear() - birthDate.getFullYear();

    const hasBirthdayOccurred =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    if (!hasBirthdayOccurred) {
      age--;
    }

    return age >= minAge
      ? null
      : {
          minimumAge: {
            requiredAge: minAge,
            actualAge: age,
          },
        };
  };
}

type NationalityLike =  {
  dialingCode?: string;
  code?: string;
}

type PhoneNumberPair = {
  phoneCodeControlName: string;
  contactNumberControlName: string;
};

export function phoneNumberFormatValidator({
  list,
  phonePairs,
}: {
  list: Signal<Nationality[]>;
  phonePairs: PhoneNumberPair[];
}): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const errors: ValidationErrors = {};

    for (const pair of phonePairs) {
      const phoneCode = group.get(pair.phoneCodeControlName)?.value;
      const contactNumber = group.get(pair.contactNumberControlName)?.value;

      if (!phoneCode || !contactNumber) continue;

      const selectedCountry = list().find(
        country => country.dialingCode === phoneCode
      );

      if (!selectedCountry) {
        continue;
      }

      const isValid = isValidPhoneNumber(
        contactNumber,
        selectedCountry.code as CountryCode
      );

      const control = group.get(pair.contactNumberControlName);

      if (!isValid) {
        control?.setErrors({ ...(control.errors ?? {}), phoneNumberFormatInvalid: true });
      }else {
        // Note: Here is error is already set below code remove that error if its valid.
         if (control?.hasError('phoneNumberFormatInvalid')) {
          const { phoneNumberFormatInvalid, ...rest } = control.errors ?? {};

          control.setErrors(Object.keys(rest).length ? rest : null);
        }
      }
    }

    return Object.keys(errors).length ? errors : null;
  };
}
