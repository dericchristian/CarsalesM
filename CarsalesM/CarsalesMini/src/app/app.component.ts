import { Component } from '@angular/core';
import { CarInfo } from './car-info';
import { FormGroup, FormControl } from '@angular/forms';
import { CarStoreServiceService } from './car-store-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {

  make: string;
  model: string;
  engine: string;
  constructor(private _carstoreservice: CarStoreServiceService) { }
  userModel = new CarInfo("", "" , "");

  vehicleType = ['Car', 'Boat', 'Motorbike'];


  onSubmit() {
    console.log(this.userModel);

    this._carstoreservice.carStore(this.userModel)
      .subscribe(
        data => console.log('Success:!', data),
        error => console.log('Error:', error)
        )
  
  }
    
    
  }
