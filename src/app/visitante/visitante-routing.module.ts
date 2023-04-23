import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalComponent } from './hospital/hospital.component';

const routes: Routes = [
  {
    path:'hospitais',
    component: HospitalComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'hospitais'
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
