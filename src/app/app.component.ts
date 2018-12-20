import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'yelp-api';
  YelpINeedSomebody = new FormGroup({
    price: new FormControl(),
    city: new FormControl(),
  })
  restaurants: any;

  constructor(private _ds: DataService) { }

  delivery: string;

  getData() {
    this._ds.getData(this.YelpINeedSomebody.value.city, this.YelpINeedSomebody.value.price).subscribe(res => {
      this.restaurants = res.businesses[Math.floor(Math.random() * res.businesses.length)]
      console.log(this.restaurants);
      let delivery = this.restaurants.transactions.indexOf('delivery')
      if (delivery > 0) {
        this.delivery = "Delivery and Pickup"
      } else {
        this.delivery = "Delivery and Dine-In Only"
      }
      return this.restaurants
    })
  }
}
