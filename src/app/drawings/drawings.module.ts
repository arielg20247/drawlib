import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawingsRoutingModule } from './drawings-routing.module';
import { MainComponent } from './main/main.component';
import { UploadComponent } from './upload/upload.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    MainComponent,
    UploadComponent,
    ItemDetailComponent,
  ],
  imports: [
    CommonModule,
    DrawingsRoutingModule,
    FormsModule,
    MatRadioModule,
    MatChipsModule,
    MatCardModule
  ]
})
export class DrawingsModule { }
