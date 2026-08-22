import { ChangeDetectionStrategy, Component, input } from '@angular/core';
// import { UserAvatar } from '../../user-avatar/user-avatar';

@Component({
  selector: 'shared-entity-cell',
  imports: [],
  templateUrl: './entity-cell.html',
  styleUrl: './entity-cell.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntityCell {
  // isAvatarVisible = input<boolean>(false);
  avatarImgUrl = input<string>();
  cellTitle = input.required<string>();
  cellSubTitle = input<string>();
}
