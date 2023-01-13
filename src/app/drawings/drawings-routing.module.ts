import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedGuard } from '../guards/is-logged.guard';
import { MainComponent } from './main/main.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [IsLoggedGuard],
    component: MainComponent,
  },
  {
    path: 'upload',
    canActivate: [IsLoggedGuard],
    component: UploadComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrawingsRoutingModule { }
