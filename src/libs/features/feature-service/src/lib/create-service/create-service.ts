import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { NgSelectModule } from '@ng-select/ng-select';
import { LanguageService, RequiredStarDirective } from '@salon-crm/shared';
import { NgxMaskDirective } from 'ngx-mask';
// import { NgxControlError } from 'ngxtension/control-error';
import { CategoryDetailsLookup, DurationLookup, GenderLookup, LookupService, StatusLookup } from '@salon-crm/core';

@Component({
  selector: 'service-create-service',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslocoModule,
    NgSelectModule,
    RequiredStarDirective,
    NgxMaskDirective,
    // NgxControlError,
  ],
  templateUrl: './create-service.html',
  styleUrl: './create-service.scss',
})
export class CreateService {
  readonly #languageService = inject(LanguageService);
  readonly #router = inject(Router);
  readonly #route = inject(ActivatedRoute);
  readonly #fb = inject(FormBuilder);
  readonly #lookupService = inject(LookupService);

  isRtl = this.#languageService.isRtl;

  statusList = signal<StatusLookup[]>(this.#lookupService.statusList);
  genderList = signal<GenderLookup[]>(this.#lookupService.genderList);
  durationList = signal<DurationLookup[]>(this.#lookupService.durationList);
  categoryList = signal<CategoryDetailsLookup[]>(this.#lookupService.categoryList);

  form = this.#fb.group({
    serviceName: ['', [Validators.required]],
    category: [null as number | null, [Validators.required]],
    duration: [null as number | null, [Validators.required]],
    price: [null as number | null, [Validators.required]],
    gender: [null as number | null, [Validators.required]],
    status: [{ value: true, disabled: true }, [Validators.required]],
    description: [''],
  });

  get f() {
    return this.form.controls
  }

  onSubmitForm() {
    console.log("On Submit");
    this.navigateToList();
  }

  clearForm() {
    this.form.reset();
    this.navigateToList();
  }

  navigateToList(){
    this.#router.navigate(['../allServices'], {
      relativeTo: this.#route,
    });
  }
}
