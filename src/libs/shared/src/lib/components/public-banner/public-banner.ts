import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-public-banner',
  imports: [],
  template: `
    <div class="bgImg"></div>
  `,
  styles: `
    .bgImg {
      height: 100%;
      border-radius: 24px;
      // background-image: url('/assets/images/carousel/slide_1.png');
      background-image: url('https://placehold.co/1700x1700');
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicBanner {}
