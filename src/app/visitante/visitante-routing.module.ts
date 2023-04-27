import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalComponent } from './hospital/hospital.component';
import { MasterPageComponent } from './master-page/master-page.component';

const subRoutes: Routes = [
  {
    path: 'hospitais',
    component: HospitalComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'hospitais'
  }
]

const routes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    children: subRoutes
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class VisitanteRoutingModule { }
