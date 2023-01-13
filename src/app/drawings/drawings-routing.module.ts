import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedGuard } from '../guards/is-logged.guard';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [IsLoggedGuard],
    component: MainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrawingsRoutingModule { }
