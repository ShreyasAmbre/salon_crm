import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { NgSelectModule } from '@ng-select/ng-select';
import { LookupService, StatusLookup, GenderLookup, NationalityLookup } from '@salon-crm/core';
import { CalendarSvg, CountryCodeSelect, LanguageService, RequiredStarDirective, SHARED_PATTERNS } from '@salon-crm/shared';
import { NgxMaskDirective } from 'ngx-mask';
// import { NgxDaterangepickerBootstrapDirective } from 'ngx-daterangepicker-bootstrap';
import { DatePickerLocaleConfig } from '@salon-crm/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import dayjs from 'dayjs';
import { NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'customer-create-customer',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslocoModule,
    NgSelectModule,
    RequiredStarDirective,
    NgxMaskDirective,
    CountryCodeSelect,
    // NgxDaterangepickerBootstrapDirective,
    NgbDatepickerModule,
    CalendarSvg,
    FontAwesomeModule,
  ],
  templateUrl: './create-customer.html',
  styleUrl: './create-customer.scss',
})
export class CreateCustomer {
  readonly #languageService = inject(LanguageService);
  readonly #router = inject(Router);
  readonly #route = inject(ActivatedRoute);
  readonly #fb = inject(FormBuilder);
  readonly #lookupService = inject(LookupService);

  protected isRtl = this.#languageService.isRtl;
  protected currentLanguage = this.#languageService.currentLanguage();

  protected readonly maxDate = dayjs();
  protected readonly datePickerLocale = computed(() => {
    const lang = this.currentLanguage;
    return DatePickerLocaleConfig[lang] ?? DatePickerLocaleConfig?.['en'];
  });

  protected readonly statusList = signal<StatusLookup[]>(this.#lookupService.statusList);
  protected readonly genderList = signal<GenderLookup[]>(this.#lookupService.genderList);
  protected readonly nationalityList = signal<NationalityLookup[]>(this.#lookupService.nationalityList);


  protected readonly form = this.#fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.email]],
    phoneCode: [{ value: '+91', disabled: true },],
    whatsAppNo:  [
      '',
      [Validators.required, Validators.pattern(SHARED_PATTERNS.INDIAN_CONTACT_NUMBER)],
    ],
    dateOfBirth: [null as NgbDateStruct | null, [Validators.required]],
    gender: [null as number | null, [Validators.required]],
    status: [{ value: true, disabled: true }, [Validators.required]],
    notes: [''],
  });

  protected get f() {
    return this.form.controls
  }

  protected onSubmitForm() {
    console.log("On Submit");
    this.navigateToList();
  }

  protected clearForm() {
    this.form.reset();
    this.navigateToList();
  }

  private navigateToList(){
    this.#router.navigate(['../allCustomers'], {
      relativeTo: this.#route,
    });
  }
}
