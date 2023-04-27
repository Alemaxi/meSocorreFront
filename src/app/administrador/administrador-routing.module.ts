import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EspecialidadeComponent } from './especialidade/especialidade.component';
import { ExameComponent } from './exame/exame.component';
import { HospitalComponent } from './hospital/hospital.component';
import { MasterPageComponent } from './master-page/master-page.component';

const subRoutes: Routes = [
  {
    path: "especialidades",
    component: EspecialidadeComponent
  },
  {
    path: "exames",
    component: ExameComponent
  },
  {
    path: "hospitais",
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
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdministradorRoutingModule { }
