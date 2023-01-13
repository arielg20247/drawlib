import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawingsRoutingModule } from './drawings-routing.module';
import { MainComponent } from './main/main.component';
import { UploadComponent } from './upload/upload.component';


@NgModule({
  declarations: [
    MainComponent,
    UploadComponent
  ],
  imports: [
    CommonModule,
    DrawingsRoutingModule
  ]
})
export class DrawingsModule { }
