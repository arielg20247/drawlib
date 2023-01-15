import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  exports: [TopBarComponent],
  declarations: [
    TopBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ]
})
export class MenusModule { }
