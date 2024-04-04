import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from 'src/app/components/main-page/main-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: ':id', component: MainPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
