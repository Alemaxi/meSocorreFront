import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorRoutingModule } from './administrador-routing.module';
import { ExameComponent } from './exame/exame.component';
import { EspecialidadeComponent } from './especialidade/especialidade.component';
import { HospitalComponent } from './hospital/hospital.component';



@NgModule({
  declarations: [
    ExameComponent,
    EspecialidadeComponent,
    HospitalComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule
  ],
  exports: [
    AdministradorRoutingModule
  ]
})
export class AdministradorModule { }
