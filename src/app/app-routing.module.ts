import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"administrador",
    loadChildren: () => import('./administrador/administrador.module').then(m => m.AdministradorModule)
  },
  {
    path:"visitante",
    loadChildren: () => import('./visitante/visitante.module').then(m => m.VisitanteModule)
  },
  {
    path:"",
    pathMatch: "full",
    redirectTo: "visitante"
  },
  {
    path:"**",
    pathMatch: "full",
    redirectTo: "visitante"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
