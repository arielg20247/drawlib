import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawingsRoutingModule } from './drawings-routing.module';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    DrawingsRoutingModule
  ]
})
export class DrawingsModule { }
