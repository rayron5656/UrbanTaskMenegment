import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainRoutingModule,
  ],
  exports: [
    MainRoutingModule
  ]
})
export class MainModule { }
