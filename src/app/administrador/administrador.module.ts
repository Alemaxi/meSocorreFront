import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorRoutingModule } from './administrador-routing.module';
import { ExameComponent } from './exame/exame.component';
import { EspecialidadeComponent } from './especialidade/especialidade.component';
import { HospitalComponent } from './hospital/hospital.component';
import { MasterPageComponent } from './master-page/master-page.component';
import { MasterPageLayoutComponent } from '../Shared/layout/master-page-layout/master-page-layout.component'
import { GenericToolbarComponent } from '../Shared/component/generic-toolbar/generic-toolbar.component';
import { OpcaoEsquerdaComponent } from '../Shared/layout/opcao-esquerda/opcao-esquerda.component';
import { AdicionarEspecialidadeOpcaoComponent } from './opcoes-laterais/adicionar-especialidade-opcao/adicionar-especialidade-opcao.component';
import { AdicionarExameOpcaoComponent } from './opcoes-laterais/adicionar-exame-opcao/adicionar-exame-opcao.component';
import { AdicionarHospitalOpcaoComponent } from './opcoes-laterais/adicionar-hospital-opcao/adicionar-hospital-opcao.component';
import { EditarHospitalOpcaoComponent } from './opcoes-laterais/editar-hospital-opcao/editar-hospital-opcao.component';


@NgModule({
  declarations: [
    ExameComponent,
    EspecialidadeComponent,
    HospitalComponent,
    MasterPageComponent,
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    MasterPageLayoutComponent,
    GenericToolbarComponent,
    OpcaoEsquerdaComponent,
    AdicionarEspecialidadeOpcaoComponent,
    AdicionarExameOpcaoComponent,
    AdicionarHospitalOpcaoComponent,
    EditarHospitalOpcaoComponent
  ],
  exports: [
    AdministradorRoutingModule
  ]
})
export class AdministradorModule { }
