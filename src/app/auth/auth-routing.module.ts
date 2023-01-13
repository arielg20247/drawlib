import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsNotLoggedGuard } from '../guards/is-not-logged.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',

    canActivate: [IsNotLoggedGuard],
    component: LoginComponent,
  },
  {
    path: 'login',
    canActivate: [IsNotLoggedGuard],
    component: LoginComponent,
  },
  {
    path: 'register',
    canActivate: [IsNotLoggedGuard],
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
