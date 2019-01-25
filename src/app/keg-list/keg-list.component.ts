import { Component, OnInit, Input } from '@angular/core';
import { Keg } from '../models/keg';
import { KegListService } from '../keg-list.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css'],
  providers: [KegListService]
})
export class KegListComponent implements OnInit {

  kegList: Keg[];

  constructor(private router: Router, private kegListService: KegListService) { }

  ngOnInit() {
    this.kegList = this.kegListService.getKegList();
  }

}
