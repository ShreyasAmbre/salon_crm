import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  imports: [RouterModule, FontAwesomeModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

  iconLibrary = inject(FaIconLibrary);

  constructor() {
    this.iconLibrary.addIconPacks(far, fas);
  }

}
