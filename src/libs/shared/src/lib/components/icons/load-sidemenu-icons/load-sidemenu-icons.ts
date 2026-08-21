import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SideMenuIconName } from '../../../models';
import { HomeSvg } from '../home-svg/home-svg';
import { CustomerSvg } from '../customer-svg/customer-svg';
import { SettingsSvg } from '../settings-svg/settings-svg';
import { ServicesSvg } from '../services-svg/services-svg';
import { BookingsSvg } from '../bookings-svg/bookings-svg';
import { CategorySvg } from '../category-svg/category-svg';

@Component({
  selector: 'shared-load-sidemenu-icons',
  imports: [HomeSvg, CustomerSvg, SettingsSvg, ServicesSvg, BookingsSvg, CategorySvg],
  templateUrl: './load-sidemenu-icons.html',
  styleUrl: './load-sidemenu-icons.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadSidemenuIcons {
  iconName = input.required<SideMenuIconName>();
  isActiveMenu = input<boolean>(false);
}
