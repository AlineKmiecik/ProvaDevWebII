import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMedicoComponent } from './views/SistemaMedico/create-medico/create-medico.component';
import { ListMedicoComponent } from './views/SistemaMedico/list-medico/list-medico.component';

const routes: Routes = [
  
  {
    path: '', 
    component: ListMedicoComponent
  },
  {
    path: 'medico/list', 
    component: ListMedicoComponent
  },
  {
    path: 'medico/create', 
    component: CreateMedicoComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
