import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { TranslocoService } from '@jsverse/transloco';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { skip } from 'rxjs';

@Component({
  imports: [RouterModule, FontAwesomeModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  #translocoService = inject(TranslocoService);
  #destroyRef = inject(DestroyRef);

  iconLibrary = inject(FaIconLibrary);

  constructor() {
    this.iconLibrary.addIconPacks(far, fas);
  }

  ngOnInit(): void {
    this.onLangChangeListener();
  }

  onLangChangeListener() {
    this.#translocoService.langChanges$
      .pipe(skip(1), takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        next: () => {
          window.location.reload();
        },
      });
  }

}
