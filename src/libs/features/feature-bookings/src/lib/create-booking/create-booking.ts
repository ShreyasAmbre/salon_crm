import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslocoModule } from '@jsverse/transloco';
import { NgSelectModule } from '@ng-select/ng-select';
import { CategoryDetailsLookup, LookupService, NationalityLookup } from '@salon-crm/core';
import { CountryCodeSelect, LanguageService, RequiredStarDirective, SHARED_PATTERNS, SingleDatePicker } from '@salon-crm/shared';
import { NgxMaskDirective } from 'ngx-mask';
import { NgbTimepickerModule, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'bookings-create-booking',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslocoModule,
    NgSelectModule,
    RequiredStarDirective,
    NgxMaskDirective,
    CountryCodeSelect,
    SingleDatePicker,
    FontAwesomeModule,
    NgbTimepickerModule,
  ],
  templateUrl: './create-booking.html',
  styleUrl: './create-booking.scss',
})
export class CreateBooking {
  readonly #languageService = inject(LanguageService);
  readonly #router = inject(Router);
  readonly #route = inject(ActivatedRoute);
  readonly #fb = inject(FormBuilder);
  readonly #lookupService = inject(LookupService);

  protected isRtl = this.#languageService.isRtl;
  protected currentLanguage = this.#languageService.currentLanguage();

  protected readonly nationalityList = signal<NationalityLookup[]>(this.#lookupService.nationalityList);
  protected readonly categoryList = signal<CategoryDetailsLookup[]>(this.#lookupService.categoryList);
  protected readonly customerList = signal([]);
  protected readonly serviceList = signal([]);
  protected readonly bookingStatusList = signal([]);
  protected readonly paymentStatusList = signal([]);


  protected readonly form = this.#fb.group({
    isCustomerAvailable: [false, [Validators.required]],
    customerSearch: [null as number | null, [Validators.required]],
    customerFirstName: ['', [Validators.required]],
    customerLastName: ['', [Validators.required]],
    customerPhoneCode: [{ value: '+91', disabled: true },],
    customerWhatsAppNo: ['', [Validators.required, Validators.pattern(SHARED_PATTERNS.INDIAN_CONTACT_NUMBER)]],
    customerEmail: ['', [Validators.required, Validators.email]],

    service: [null as number | null, [Validators.required]],
    category: [null as number | null, [Validators.required]],
    bookingDate: ['', [Validators.required]],
    startTime: [null as NgbTimeStruct | null, [Validators.required]],
    endTime: [null as NgbTimeStruct | null, [Validators.required]],

    bookingStatus: [null as number | null, [Validators.required]],
    paymentStatus: [null as number | null, [Validators.required]],
    bookingNotes: [''],
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
    this.#router.navigate(['../allBookings'], {
      relativeTo: this.#route,
    });
  }

}
