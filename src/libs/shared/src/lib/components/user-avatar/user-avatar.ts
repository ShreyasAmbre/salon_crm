import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const PALETTE = {
  user_profile: {
    color: 'var(--secondary-color)',
    bgColor: '#e7ecff',
  },
} as const;
type Palette = keyof typeof PALETTE;

@Component({
  selector: 'shared-user-avatar',
  imports: [CommonModule, FontAwesomeModule, NgOptimizedImage],
  template: `
    <div
      class="user-avatar"
      [ngStyle]="{ 'background-color': backgroundColor() }"
      [style.width]="size() + 'px'"
      [style.height]="size() + 'px'"
    >
      @if (src(); as imageSrc) {
        @if (isSrcBase64() || isSrcBlob()) {
          <img [src]="imageSrc" alt="User Avatar" width="44" height="44" />
        } @else {
          <img [ngSrc]="imageSrc" alt="User Avatar" width="44" height="44" />
        }
      } @else if (name()) {
        <div
          class="user-avatar-placeholder"
          [style.font-size]="fontSize()"
          [style.color]="fontColor()"
        >
          {{ name() | slice: 0 : 1 | uppercase }}
        </div>
      } @else {
        <div class="user-avatar-placeholder" [style.font-size]="fontSize()">
          <fa-icon [icon]="['fas', 'user']" />
        </div>
      }
    </div>
  `,
  styles: [
    `
      .user-avatar {
        width: 44px;
        height: 44px;
        border-radius: 6px;
        overflow: hidden;
        display: grid;
        place-items: center;
      }

      .user-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .user-avatar-placeholder {
        width: 100%;
        height: 100%;
        border-radius: 6px;
        display: grid;
        place-items: center;

        font-family: var(--font-primary);
        font-size: 1.125rem;
        font-size: 20px;
        font-weight: 400;
        color: #fff;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserAvatar {
  src = input<string | undefined>(undefined);
  name = input<string | undefined>(undefined);
  size = input<number>(44);
  palette = input<Palette | undefined>(undefined);
  isSrcBase64 = computed(() => this.src()?.startsWith('data:'));
  isSrcBlob = computed(() => this.src()?.startsWith('blob:'));
  fontSize = computed(() => this.size() / 2.5 + 'px');
  fontColor = computed(() => {
    const p = this.palette();
    if (p) return PALETTE[p].color; // keep existing behavior

    const name = this.name();
    if (!name) return '#1f2933'; // fallback

    const index = this.hashString(name) % this.#avatarColors.length;
    return this.#avatarColors[index].text;
  });

  #bgcolors = [
    '#E1F0FF', // light blue
    '#EEE5FF', // light Purple
    '#FFF4DE', // light orange
    '#C9F7F5', // light green
  ];

  #avatarColors = [
    { bg: '#E1F0FF', text: 'rgba(54, 153, 255, 1)' }, // Blue family
    { bg: '#EEE5FF', text: 'rgba(137, 80, 252, 1)' }, // Purple family
    { bg: '#FFF4DE', text: 'rgba(255, 168, 0, 1)' }, // Orange family
    { bg: '#C9F7F5', text: 'rgba(27, 197, 189, 1)' }, // Green family
  ];

  backgroundColor = computed(() => {
    const p = this.palette();
    if (p) {
      return PALETTE[p].bgColor;
    }
    if (this.src()) {
      return '#f5f5f7';
    }

    return this.getBgColorForName(this.name());
  });

  private getBgColorForName(name: string | undefined): string {
    if (!name) {
      return 'var(--primary-color)';
    }
    const index = this.hashString(name) % this.#bgcolors.length;
    return this.#bgcolors[index];
  }

  private hashString(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
  }
}
