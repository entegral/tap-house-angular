import { Component, OnInit, Input } from '@angular/core';
import { Keg } from '../models/keg';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})
export class EmployeePageComponent implements OnInit {

  @Input('kegList') kegList: Keg[];
  editKeg: Boolean = false;
  displayBeer: Boolean = false;

  newBeerName: string = 'Name';
  newBeerBrand: string = 'Brewery';
  newPintPrice: string = 'Price of Pint';
  newABV: string = 'ABV';


  constructor() { }

  ngOnInit() {
  }

  editBeer(){
    this.editKeg = !this.editKeg;

  }

  newBeer(){
    this.displayBeer = !this.displayBeer;
  }

  addKeg(){

    this.kegList.push(new Keg(
      this.newBeerName,
      this.newBeerBrand,
      parseInt(this.newPintPrice),
      parseInt(this.newABV)
    ));

  }
}
