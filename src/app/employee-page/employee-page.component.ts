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



  constructor() { }

  ngOnInit() {
  }

  editBeer(){
    this.editKeg = !this.editKeg;

  }
}
