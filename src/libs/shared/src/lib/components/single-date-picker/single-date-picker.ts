import { Component, forwardRef, input, viewChild } from '@angular/core';
import { NgbInputDatepicker, NgbDateStruct, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { isoStringToNgbDate, ngbDateToISOString } from '../../utils';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { CalendarSvg } from '../icons';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'shared-single-date-picker',
  imports: [
    TranslocoModule,
    NgbDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarSvg
  ],
  templateUrl: './single-date-picker.html',
  styleUrl: './single-date-picker.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SingleDatePicker),
      multi: true,
    },
  ],
})
export class SingleDatePicker implements ControlValueAccessor {
  datePickerInput = viewChild<NgbInputDatepicker>('datePickerInput');

  protected readonly placeholder = input<string>('selectDate');
  protected readonly minDate = input<NgbDateStruct>();
  protected readonly maxDate = input<NgbDateStruct>();

  protected value: NgbDateStruct | null = null;
  protected disabled = false;

  private onChange: (value: string | null) => void = () => { /* empty */ };
  private onTouched!: () => void;

  writeValue(value: string | null): void {
    this.value = isoStringToNgbDate(value);
  }

  registerOnChange(fn: (value: string | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  protected selectDate(date: NgbDateStruct): void {
    this.value = date;

    this.onChange(ngbDateToISOString(date));

    this.onTouched();

    this.datePickerInput()?.close();
  }

  protected open(): void {
    if (!this.disabled) {
      this.datePickerInput()?.open();
    }
  }
}
