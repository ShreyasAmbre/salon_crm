import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { NgSelectModule } from '@ng-select/ng-select';
import { LookupService, StatusLookup, GenderLookup, NationalityLookup } from '@salon-crm/core';
import { RequiredStarDirective, CountryCodeSelect, LanguageService, SHARED_PATTERNS, SingleDatePicker } from '@salon-crm/shared';
import { NgxMaskDirective } from 'ngx-mask';
import { injectRouteData } from 'ngxtension/inject-route-data';
import { CustomerDetails } from '../data-access';

@Component({
  selector: 'customer-update-customer',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslocoModule,
    NgSelectModule,
    RequiredStarDirective,
    NgxMaskDirective,
    CountryCodeSelect,
    SingleDatePicker,
  ],
  templateUrl: './update-customer.html',
  styleUrl: './update-customer.scss',
})
export class UpdateCustomer implements OnInit {
  readonly #languageService = inject(LanguageService);
  readonly #router = inject(Router);
  readonly #route = inject(ActivatedRoute);
  readonly #fb = inject(FormBuilder);
  readonly #lookupService = inject(LookupService);

  protected isRtl = this.#languageService.isRtl;
  protected isReadonly = injectRouteData<boolean>('isReadonly');

  protected readonly statusList = signal<StatusLookup[]>(this.#lookupService.statusList);
  protected readonly genderList = signal<GenderLookup[]>(this.#lookupService.genderList);
  protected readonly nationalityList = signal<NationalityLookup[]>(this.#lookupService.nationalityList);

  protected readonly customerDetails = signal<CustomerDetails>(history.state?.customerDetails);

  protected readonly form = this.#fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.email]],
    phoneCode: [{ value: '+91', disabled: true },],
    whatsAppNo:  [
      '',
      [Validators.required, Validators.pattern(SHARED_PATTERNS.INDIAN_CONTACT_NUMBER)],
    ],
    dateOfBirth: ['', [Validators.required]],
    gender: [null as number | null, [Validators.required]],
    status: [{ value: true, disabled: true }, [Validators.required]],
    notes: [''],
  });

  protected get f() {
    return this.form.controls
  }

  ngOnInit(): void {
    this.patchFormValues();
  }

  private patchFormValues() {
    const data = this.customerDetails();
    console.log(data);
    this.form.patchValue({
      firstName: data?.firstName,
      lastName: data?.lastName,
      email: data?.email,
      whatsAppNo: data?.whatsappNumber,
      dateOfBirth: data?.dateOfBirth,
      gender: data?.gender,
      status: data?.isActive,
      notes: data?.notes,
    });

    this.updateFormState();
  }

  private updateFormState() {
    if (this.isReadonly()) {
      this.form.disable({ emitEvent: false });
    }
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
