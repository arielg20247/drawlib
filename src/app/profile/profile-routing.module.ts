import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedGuard } from '../guards/is-logged.guard';
import { ProfileResolver } from '../resolvers/profile.resolver';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [

  {
    path: '',
    canActivate: [IsLoggedGuard],
    component: UserDetailsComponent,
    resolve: {
      profile: ProfileResolver,
    },
  },
  {
    path: ':id',
    canActivate: [IsLoggedGuard],
    component: UserDetailsComponent,
    resolve: {
      profile: ProfileResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
