import { Route } from '@angular/router';
import { AllBookings } from './all-bookings/all-bookings';
import { CreateBooking } from './create-booking/create-booking';
import { UpdateBooking } from './update-booking/update-booking';
import { BookingCalendarView } from './booking-calendar-view/booking-calendar-view';

export const featureBookingsRoutes: Route[] = [
  { path: '', redirectTo: 'allBookings', pathMatch: 'full' },
  {
    path:'allBookings',
    component: AllBookings,
    title: 'pageTitle.allBookings'
  },
  {
    path:'createBooking',
    component: CreateBooking,
    title: 'pageTitle.createBooking'
  },
  {
    path:'updateBooking',
    component: UpdateBooking,
    title: 'pageTitle.updateBooking',
    data: { isReadonly: false },
  },
  {
    path:'bookingDetails',
    component: UpdateBooking,
    title: 'pageTitle.bookingDetails',
    data: { isReadonly: true },
  },
  {
    path:'bookingsCalendarView',
    component: BookingCalendarView,
    title: 'pageTitle.bookingsCalendarView'
  },
];
