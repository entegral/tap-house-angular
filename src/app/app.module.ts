import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';


@NgModule({
  declarations: [
    AppComponent,
    KegListComponent,
    EmployeePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
