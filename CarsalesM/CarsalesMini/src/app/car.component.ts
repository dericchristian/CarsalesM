import { Component } from '@angular/core';
import { CarInfo } from './car-info';
import { FormGroup, FormControl } from '@angular/forms';
import { CarStoreServiceService } from './car-store-service.service';
import { AppComponent } from './app.component';
@Component({
  selector: 'app-root',
  templateUrl: './car.component.html',
  styleUrls: ['./app.component.css']

})
export class CarComponent {

 

  constructor(private appcomponent: AppComponent) {
   
  }

}
