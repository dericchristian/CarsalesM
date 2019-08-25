import { Injectable, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarInfo } from './car-info';

@Injectable({
  providedIn: 'root'
})

export class CarStoreServiceService {

  _url = 'http://localhost:3000/cars';
  constructor(private http: HttpClient) { }

  carStore(car: CarInfo) {

    return this.http.post<any>(this._url, car);
  }

  carShow(car: CarInfo) {

    return this.http.post<any>(this._url, car);

  }
}
