import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef, input } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'shared-country-code-select',
  imports: [CommonModule, TranslocoModule, NgSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './country-code-select.html',
  styleUrl: './country-code-select.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CountryCodeSelect),
      multi: true,
    },
  ],
})
export class CountryCodeSelect implements ControlValueAccessor {
  countryCodes = input<any[]>([]);
  placeholder = input<string>('countryCodeInputPlaceholder');
  readonly = input<boolean>(false);
  showFlag = input<boolean>(true);
  bindLabel = input<'codeWithDialing' | 'dialingCode'>('dialingCode');
  searchFn = input<(term: string, item: any) => boolean>();

  private onChange: (value: string | null) => void = () => { /* empty */ };
  private onTouched: () => void = () => { /* empty */ };

  value: string | null = null;
  disabled = false;

  // Note: Below are inbuilt hook methods created for our component by ControlValueAccessor
  writeValue(value: string | null): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
    // console.log("registerOnChange =>", fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
    // console.log("registerOnTouched =>", fn);
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onValueChange(value: string | null): void {
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }
}
