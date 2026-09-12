import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslocoModule } from '@jsverse/transloco';
import { NgSelectModule } from '@ng-select/ng-select';
import { BOOKING_STATUS_TYPE, BookingStatusList, CategoryDetailsLookup, CustomerLookup, LookupService, NationalityLookup, PAYMENT_STATUS_TYPE, PaymentStatusList, ServiceLookup } from '@salon-crm/core';
import { CountryCodeSelect, dateToNgbDate, LanguageService, RequiredStarDirective, SHARED_PATTERNS, SingleDatePicker } from '@salon-crm/shared';
import { NgxMaskDirective } from 'ngx-mask';
import { NgbTimepickerModule, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { toSignal } from '@angular/core/rxjs-interop';
import { explicitEffect } from 'ngxtension/explicit-effect';

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
  readonly minDate = dateToNgbDate(new Date());

  protected readonly nationalityList = signal<NationalityLookup[]>(this.#lookupService.nationalityList);
  protected readonly categoryList = signal<CategoryDetailsLookup[]>(this.#lookupService.categoryList);
  protected readonly customerList = signal<CustomerLookup[]>(this.#lookupService.customerLookupList);
  protected readonly serviceList = signal<ServiceLookup[]>(this.#lookupService.serviceLookupList);
  protected readonly bookingStatusList = signal<BookingStatusList[]>(this.#lookupService.bookingStatusLookupList);
  protected readonly paymentStatusList = signal<PaymentStatusList[]>(this.#lookupService.paymentStatusLookupList);


  protected readonly form = this.#fb.group({
    isCustomerAvailable: [false, [Validators.required]],
    customerSearch: [null as CustomerLookup | null, [Validators.required]],
    customerFirstName: ['', [Validators.required]],
    customerLastName: ['', [Validators.required]],
    customerPhoneCode: [{ value: '+91', disabled: true },],
    customerWhatsAppNo: ['', [Validators.required, Validators.pattern(SHARED_PATTERNS.INDIAN_CONTACT_NUMBER)]],
    customerEmail: ['', [Validators.email]],

    service: [null as ServiceLookup | null, [Validators.required]],
    category: [{ value: null as number | null, disabled: true }, [Validators.required]],
    bookingDate: ['', [Validators.required]],
    startTime: [null as NgbTimeStruct | null, [Validators.required]],
    endTime: [null as NgbTimeStruct | null, [Validators.required]],

    bookingStatus: [{ value: BOOKING_STATUS_TYPE.PENDING, disabled: true }, [Validators.required]],
    paymentStatus: [{ value: PAYMENT_STATUS_TYPE.PENDING, disabled: true }, [Validators.required]],
    bookingNotes: [''],
  });

  protected get f() {
    return this.form.controls
  }

  isCustomerAvailableInputSignal = toSignal(this.f.isCustomerAvailable.valueChanges, { initialValue: this.f.isCustomerAvailable.value, });
  isCustomerSelected = toSignal(this.f.customerSearch.valueChanges, { initialValue: this.f.customerSearch.value });
  isServiceSelected = toSignal(this.f.service.valueChanges, { initialValue: this.f.service.value });

  formChangesExplicitEffect = explicitEffect(
    [this.isCustomerAvailableInputSignal, this.isCustomerSelected, this.isServiceSelected], (
    [isCustomerAvailableInputSignal, isCustomerSelected, isServiceSelected]) => {

    const customerFields = [
      this.f.customerFirstName,
      this.f.customerLastName,
      this.f.customerWhatsAppNo,
      this.f.customerEmail,
    ];

    // Note: If customer is available user will select the customer and below field will ne auto filled and disabled.
    customerFields.forEach((control) => {
      if (isCustomerAvailableInputSignal) {
        control.disable({ emitEvent: false });
      } else {
        control.enable({ emitEvent: false });
      }
    });

    if(isCustomerAvailableInputSignal){
      this.f.customerSearch.enable({ emitEvent: false });
    }else {
      this.f.customerSearch.disable({ emitEvent: false });
    }

    if(isCustomerSelected){
      this.patchSelectedCustomerDetails();
    }

    if(isServiceSelected){
      console.log(isServiceSelected);

      this.f.category.setValue(isServiceSelected.categoryId)
    }
  });

  protected onSubmitForm() {
    console.log("On Submit");
    this.navigateToList();
  }

  protected clearForm() {
    this.form.reset();
    this.navigateToList();
  }

  private patchSelectedCustomerDetails(){
    const selectedCustomer = this.isCustomerSelected();
    this.form.patchValue({
      customerFirstName: selectedCustomer?.firstName,
      customerLastName: selectedCustomer?.lastName,
      customerWhatsAppNo: selectedCustomer?.whatsappNumber,
      customerEmail: selectedCustomer?.email,
    });
  }

  private navigateToList(){
    this.#router.navigate(['../allBookings'], {
      relativeTo: this.#route,
    });
  }

}
