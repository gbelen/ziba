import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  // { path: '', component: ClientesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {



}