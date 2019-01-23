import { Component, OnInit, Input } from '@angular/core';
import { Keg } from '../models/keg';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent implements OnInit {

  @Input('kegList') kegList: Keg[];

  constructor() { }

  ngOnInit() {
    
  }

}
