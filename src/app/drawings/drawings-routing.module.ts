import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedGuard } from '../guards/is-logged.guard';
import { ImageByUserResolver } from '../resolvers/image-by-user.resolver';
import { ImageResolver } from '../resolvers/image.resolver';
import { TagsResolver } from '../resolvers/tags.resolver';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { MainComponent } from './main/main.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {
    path: 'user/:id',
    canActivate: [IsLoggedGuard],
    component: MainComponent,
    resolve: {
      image: ImageByUserResolver,
      tags: TagsResolver,
    },

  },
  {
    path: '',
    canActivate: [IsLoggedGuard],
    component: MainComponent,
    resolve: {
      image: ImageByUserResolver,
      tags: TagsResolver,
    },
  },
  {
    path: 'upload',
    canActivate: [IsLoggedGuard],
    component: UploadComponent,
    resolve: {
      tags: TagsResolver,
    },
  },
  {
    path: ':id',
    canActivate: [IsLoggedGuard],
    component: ItemDetailComponent,
    resolve: {
      image: ImageResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrawingsRoutingModule {}
