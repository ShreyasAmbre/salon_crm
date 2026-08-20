import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-login',
  imports: [TranslocoModule, CommonModule, ReactiveFormsModule, FormsModule, FontAwesomeModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  readonly #router = inject(Router);
  // readonly #languageService = inject(LanguageService);
  readonly #fb = inject(FormBuilder);

  // isRtl = this.#languageService.isRtl;
  isPasswordVisible = signal(false);
  form = this.#fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.invalid) return;
    const formValues = this.form.getRawValue();
    console.log("Form values =>", formValues);
    this.#router.navigate(['/dashboard']);
  }

  goToForgotPassword() {
    this.#router.navigate(['/forgot-password']);
  }

  togglePasswordVisibility() {
    this.isPasswordVisible.update((isVisible) => !isVisible);
  }
}
