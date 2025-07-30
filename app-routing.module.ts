import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { BookingTicketComponent } from './pages/booking-ticket/booking-ticket.component';
import { MyBookingComponent } from './pages/my-booking/my-booking.component';
const routes: Routes = [
  {    path: '',    redirectTo: 'search',    pathMatch:'full'  },
  {path:'search', component:SearchComponent},
  {path:'search-result', component:SearchResultComponent},
  {path:'booking-ticket', component:BookingTicketComponent},
  {path:'my-booking',component:MyBookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
