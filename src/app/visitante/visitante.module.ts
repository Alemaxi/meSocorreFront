import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitanteRoutingModule } from './visitante-routing.module';
import { HospitalComponent } from './hospital/hospital.component';



@NgModule({
  declarations: [
    HospitalComponent
  ],
  imports: [
    CommonModule,
    VisitanteRoutingModule
  ],
  exports: [
    VisitanteRoutingModule
  ]
})
export class VisitanteModule { }
