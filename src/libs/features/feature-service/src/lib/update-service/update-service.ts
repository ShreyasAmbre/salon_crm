import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { NgSelectModule } from '@ng-select/ng-select';
import { LookupService, StatusLookup, GenderLookup, DurationLookup, CategoryDetailsLookup } from '@salon-crm/core';
import { LanguageService, RequiredStarDirective } from '@salon-crm/shared';
import { NgxMaskDirective } from 'ngx-mask';
import { injectRouteData } from 'ngxtension/inject-route-data';
import { ServiceDetails } from '../data-access/models/service.model';

@Component({
  selector: 'service-update-service',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslocoModule,
    NgSelectModule,
    RequiredStarDirective,
    NgxMaskDirective,
  ],
  templateUrl: './update-service.html',
  styleUrl: './update-service.scss',
})
export class UpdateService implements OnInit {
  readonly #languageService = inject(LanguageService);
  readonly #router = inject(Router);
  readonly #route = inject(ActivatedRoute);
  readonly #fb = inject(FormBuilder);
  readonly #lookupService = inject(LookupService);

  protected isRtl = this.#languageService.isRtl;
  protected isReadonly = injectRouteData<boolean>('isReadonly');

  protected readonly statusList = signal<StatusLookup[]>(this.#lookupService.statusList);
  protected readonly genderList = signal<GenderLookup[]>(this.#lookupService.genderList);
  protected readonly durationList = signal<DurationLookup[]>(this.#lookupService.durationList);
  protected readonly categoryList = signal<CategoryDetailsLookup[]>(this.#lookupService.categoryList);

  protected readonly serviceDetails = signal<ServiceDetails>(history.state?.serviceDetails);


  protected readonly form = this.#fb.group({
    serviceName: ['', [Validators.required]],
    category: [null as number | null, [Validators.required]],
    duration: [null as number | null, [Validators.required]],
    price: [null as number | null, [Validators.required]],
    gender: [null as number | null, [Validators.required]],
    status: [null as boolean | null, [Validators.required]],
    description: [''],
  });

  protected get f() {
    return this.form.controls
  }

  ngOnInit(): void {
    this.patchFormValues();
  }

  private patchFormValues() {
    const data = this.serviceDetails();
    this.form.patchValue({
      serviceName: data.name,
      category: data.categoryId,
      duration: data?.durationInMinutes,
      price: data?.price,
      gender: data.gender,
      status: data.isActive,
      description: data?.description,
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
    this.#router.navigate(['../allServices'], {
      relativeTo: this.#route,
    });
  }
}
