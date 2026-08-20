import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SideMenuIconName } from '../../../models';
import { HomeSvg } from '../home-svg/home-svg';
import { CustomerSvg } from '../customer-svg/customer-svg';

@Component({
  selector: 'shared-load-sidemenu-icons',
  imports: [HomeSvg, CustomerSvg],
  templateUrl: './load-sidemenu-icons.html',
  styleUrl: './load-sidemenu-icons.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadSidemenuIcons {
  iconName = input.required<SideMenuIconName>();
  isActiveMenu = input<boolean>(false);
}
