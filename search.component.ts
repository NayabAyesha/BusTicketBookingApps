import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchQuery: any = {
    fromCity: '',
    toCity: '',
    journeyDate: ''
  };
  constructor(private router: Router) { }

  onSearch()
  {
    if(this.searchQuery.fromCity && this.searchQuery.toCity && this.searchQuery.journeyDate)
    {
      this.router.navigate(['/search-result'],
        {queryParams:this.searchQuery}
      );
      
    }
    else
    {
      alert('Please fill in all fields before searching.');
      return;
    }
  }
  }