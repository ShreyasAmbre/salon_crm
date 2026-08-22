import { TranslocoService } from '@jsverse/transloco';
import { ErrorTailorConfig } from '@ngneat/error-tailor';

export const errorTailorConfig: ErrorTailorConfig = {
  errors: {
    useFactory(service: TranslocoService) {
      return {
        required: () => service.translate('formError.required'),
        email: () => service.translate('formError.email'),
        pattern: () => service.translate('formError.pattern'),
        minlength: (error) =>
          service.translate('formError.minlength', {
            _value: error.requiredLength,
          }),
        maxlength: (error) =>
          service.translate('formError.maxlength', {
            _value: error.requiredLength,
          }),
        passwordMinLength: (error) =>
          service.translate('formError.passwordMinLength', { _val: error.requiredLength }),
        passwordUppercase: () => service.translate('formError.passwordUppercase'),
        passwordLowercase: () => service.translate('formError.passwordLowercase'),
        passwordNumber: () => service.translate('formError.passwordNumber'),
        passwordSpecialChar: () => service.translate('formError.passwordSpecialChar'),
        requiredFileType: (error) => service.translate('formError.requiredFileType', { _value: error }),
        maxFileSize: (error) => service.translate('formError.maxFileSize', { _value: error }),
        min: (error) => service.translate('formError.minValue', { _value: error.min }),
        max: (error) => service.translate('formError.maxValue', { _value: error.max }),
        minimumAge: (error) => service.translate('formError.minimumAge', { _value: error.requiredAge }),
      };
    },
    deps: [TranslocoService],
  },
  blurPredicate: (element: Element) =>
    [
      'INPUT',
      'SELECT',
      'TEXTAREA',
      'NG-SELECT',
    ].some((selector) => element.tagName === selector),
  controlCustomClass: 'is-invalid',
  controlErrorsClass: 'invalid-feedback d-block',
};
