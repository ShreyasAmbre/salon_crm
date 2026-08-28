import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { NgSelectModule } from '@ng-select/ng-select';
import { LookupService, StatusLookup, GenderLookup, NationalityLookup } from '@salon-crm/core';
import { CountryCodeSelect, LanguageService, RequiredStarDirective, SHARED_PATTERNS } from '@salon-crm/shared';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'customer-create-customer',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslocoModule,
    NgSelectModule,
    RequiredStarDirective,
    NgxMaskDirective,
    CountryCodeSelect
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

  protected readonly statusList = signal<StatusLookup[]>(this.#lookupService.statusList);
  protected readonly genderList = signal<GenderLookup[]>(this.#lookupService.genderList);
  protected readonly nationalityList = signal<NationalityLookup[]>(this.#lookupService.nationalityList);


  protected readonly form = this.#fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.email]],
    phoneCode: ['+91'],
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
