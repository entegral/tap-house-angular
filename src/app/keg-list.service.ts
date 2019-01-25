import { Injectable } from '@angular/core';
import { Keg } from './models/keg'
import { kegList } from './kegList'

@Injectable()
export class KegListService {

  constructor() { }

  getKegList(){
    return kegList;
  }

  addKeg(keg){
    kegList.push(keg);
  }

}
