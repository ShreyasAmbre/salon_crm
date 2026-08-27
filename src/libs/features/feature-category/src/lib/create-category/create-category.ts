import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { NgSelectModule } from '@ng-select/ng-select';
import { LookupService, StatusLookup } from '@salon-crm/core';
import { LanguageService, RequiredStarDirective } from '@salon-crm/shared';

@Component({
  selector: 'category-create-category',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslocoModule,
    NgSelectModule,
    RequiredStarDirective,
  ],
  templateUrl: './create-category.html',
  styleUrl: './create-category.scss',
})
export class CreateCategory {
  readonly #languageService = inject(LanguageService);
  readonly #router = inject(Router);
  readonly #route = inject(ActivatedRoute);
  readonly #fb = inject(FormBuilder);
  readonly #lookupService = inject(LookupService);

  protected isRtl = this.#languageService.isRtl;
  protected readonly statusList = signal<StatusLookup[]>(this.#lookupService.statusList);

  protected readonly form = this.#fb.group({
    categoryName: ['', [Validators.required]],
    description: [''],
    status: [{ value: true, disabled: true }, [Validators.required]],
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
    this.#router.navigate(['../allCategories'], {
      relativeTo: this.#route,
    });
  }

}
