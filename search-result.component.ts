import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-result',
  standalone: false,
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent implements OnInit {
    fromCity: string|null= '';
    toCity: string|null= '';
    journeyDate:string|null= '';

     busList = [
    {
      name: 'Matyana Movers',
      departureTime: '05:00 PM',
      arrivalTime: '11:00 AM',
      duration: '6h 00m',
      price: 1700,
      seatsAvailable: 25
    },
    {
      name: 'Faisal Movers',
      departureTime: '07:30 PM',
      arrivalTime: '02:00 PM',
      duration: '5h 30m',
      price: 1800,
      seatsAvailable: 15
    },
    {
      name: 'Abdullah Travels',
      departureTime: '01:00 AM',
      arrivalTime: '06:00 AM',
      duration: '5h 00m',
      price: 1700,
      seatsAvailable: 30
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.fromCity = params['fromCity'] || '';
      this.toCity = params['toCity'] || '';
      this.journeyDate = params['journeyDate'] || '';
    });
  }

}
