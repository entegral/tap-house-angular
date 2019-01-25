import { Component, OnInit, Input } from '@angular/core';
import { Keg } from '../models/keg';
import { Router } from '@angular/router';
import { KegListService } from '../keg-list.service'


@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css'],
  providers: [KegListService]
})
export class EmployeePageComponent implements OnInit {

  kegList: Keg[];
  editKeg: Boolean = false;
  displayBeer: Boolean = false;

  newBeerName: string;
  newBeerBrand: string;
  newPintPrice: string;
  newABV: string;


  constructor(private router: Router, private kegListService: KegListService) { }

  ngOnInit() {
    this.kegList = this.kegListService.getKegList();
  }

  editBeer(){
    this.editKeg = !this.editKeg;

  }

  newBeer(){
    this.displayBeer = !this.displayBeer;
  }

  addKeg(){

    if (this.newBeerName && this.newBeerBrand && this.newPintPrice && this.newABV) {
      this.kegListService.addKeg(new Keg(
        this.newBeerName,
        this.newBeerBrand,
        parseInt(this.newPintPrice),
        parseInt(this.newABV)
      ));

      this.displayBeer = false;
      this.newBeerName = null;
      this.newBeerBrand = null;
      this.newPintPrice = null;
      this.newABV = null;
    }

  }
}
