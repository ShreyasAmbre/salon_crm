import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { NgSelectModule } from '@ng-select/ng-select';
import { LookupService, StatusLookup } from '@salon-crm/core';
import { LanguageService, RequiredStarDirective } from '@salon-crm/shared';
import { injectRouteData } from 'ngxtension/inject-route-data';
import { CategoryDetails } from '../data-access';

@Component({
  selector: 'category-update-category',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslocoModule,
    NgSelectModule,
    RequiredStarDirective,
  ],
  templateUrl: './update-category.html',
  styleUrl: './update-category.scss',
})
export class UpdateCategory implements OnInit {
  readonly #languageService = inject(LanguageService);
  readonly #router = inject(Router);
  readonly #route = inject(ActivatedRoute);
  readonly #fb = inject(FormBuilder);
  readonly #lookupService = inject(LookupService);

  protected isRtl = this.#languageService.isRtl;
  protected isReadonly = injectRouteData<boolean>('isReadonly');

  protected readonly statusList = signal<StatusLookup[]>(this.#lookupService.statusList);

  protected readonly categoryDetails = signal<CategoryDetails>(history.state?.categoryDetails);

  protected readonly form = this.#fb.group({
    categoryName: ['', [Validators.required]],
    description: [''],
    status: [null as boolean | null, [Validators.required]],
  });

  protected get f() {
    return this.form.controls
  }

  ngOnInit(): void {
    this.patchFormValues();
  }

  private patchFormValues() {
    const data = this.categoryDetails();
    this.form.patchValue({
      categoryName: data.name,
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
    this.#router.navigate(['../allCategories'], {
      relativeTo: this.#route,
    });
  }

}
