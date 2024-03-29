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
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ImageFilterTagPipe } from '../pipes/image-filter-tag.pipe';


@NgModule({
  declarations: [
    MainComponent,
    UploadComponent,
    ItemDetailComponent,
    ImageFilterTagPipe
  ],
  imports: [
    CommonModule,
    DrawingsRoutingModule,
    FormsModule,
    MatRadioModule,
    MatChipsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class DrawingsModule { }
