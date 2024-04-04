import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'create', loadChildren: () => import('./modules/create/create.module').then(m => m.CreateModule)},
  {path:'main', loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule)},
  {path:'', redirectTo: 'main', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
