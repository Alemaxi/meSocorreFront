import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitanteRoutingModule } from './visitante-routing.module';
import { HospitalComponent } from './hospital/hospital.component';
import { MasterPageComponent } from './master-page/master-page.component';
import { MasterPageLayoutComponent } from '../Shared/layout/master-page-layout/master-page-layout.component';
import { MatToolbarModule } from '@angular/material';
import { GenericToolbarComponent } from '../Shared/component/generic-toolbar/generic-toolbar.component';
import { OpcaoEsquerdaComponent } from '../Shared/layout/opcao-esquerda/opcao-esquerda.component';



@NgModule({
  declarations: [
    HospitalComponent,
    MasterPageComponent
  ],
  imports: [
    CommonModule,
    VisitanteRoutingModule,
    MasterPageLayoutComponent,
    MatToolbarModule,
    GenericToolbarComponent,
    OpcaoEsquerdaComponent
  ],
  exports: [
    VisitanteRoutingModule
  ]
})
export class VisitanteModule { }
