import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const APIKEY = environment.APIKEY

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': APIKEY,
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(public _http:HttpClient) { }

  getData(city, price): Observable<any> {
    return this._http.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}&price=${price}`, httpOptions)
  }

}
