import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './pages/search/search.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { BookingTicketComponent } from './pages/booking-ticket/booking-ticket.component';
import { MyBookingComponent } from './pages/my-booking/my-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultComponent,
    BookingTicketComponent,
    MyBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
