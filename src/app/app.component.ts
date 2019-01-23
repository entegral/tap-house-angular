import { Component } from '@angular/core';
import { Keg } from './models/keg';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tap Room';
  kegList: Keg[] = [];

  constructor(){
    this.kegList.push(new Keg("Vortex IPA", "Fort George Brewery", 5, 7.7));
    this.kegList.push(new Keg("Space Dust IPA", "Elysian Brewing Company", 5, 8.2));
    this.kegList.push(new Keg("Fresh Squeezed IPA", "Deschutes Brewery", 5, 6.4));
    this.kegList.push(new Keg("Notorious Triple IPA", "Boneyard Beer Company", 5, 12));
  }
}
