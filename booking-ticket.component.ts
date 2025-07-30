import { Component } from '@angular/core';

interface Seat {
    SeatNumber: string;
    IsBooked: boolean;
    IsSelected: boolean;
  }
@Component({
  selector: 'app-booking-ticket',
  standalone: false,
  templateUrl: './booking-ticket.component.html',
  styleUrl: './booking-ticket.component.css'
})
export class BookingTicketComponent {
  seats: Seat[] = this.createseatlayout();
  selectedSeats: Seat[] = [];
   totalFare: number = 0;
  seatPrice: number = 1200;

  createseatlayout() : Seat[] {
    const layout: Seat[] = [];
      const rows = 10; // 10 rows
    const cols = 5; // 3 seats on left, aisle, 2 on right

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        // Aisle column
        if (j === 2) {
          continue; 
        }
        const seatNumber = `${String.fromCharCode(65 + i)}${j + 1}`;
        layout.push({
          SeatNumber: seatNumber,
          IsBooked: Math.random() < 0.2,
          IsSelected: false
        });
}
    }
    return layout;
  }
   selectSeat(seat: Seat): void {
    if (seat.IsBooked) {
      return; 
    }
    seat.IsSelected = !seat.IsSelected;
    this.updateSelection();
  }

    updateSelection(): void {
    this.selectedSeats = this.seats.filter(seat => seat.IsSelected);
    this.totalFare = this.selectedSeats.length * this.seatPrice;
  }

  getSelectedSeatNumbers(): string {
    return this.selectedSeats.map(s => s.SeatNumber).join(', ');
  }

  proceedToBooking(): void {
    if (this.selectedSeats.length === 0) {
      alert('Please select at least one seat.');
      return;
    }
    alert(`Booking confirmed for seats: ${this.getSelectedSeatNumbers()}\nTotal Fare: Rs${this.totalFare}`);
  }
}