import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { EmployeePageComponent } from './employee-page/employee-page.component'

const appRoutes: Routes = [
  {
    path: '',
    component: KegListComponent
  },

  {
    path: 'employee',
    component: EmployeePageComponent
  },

 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
