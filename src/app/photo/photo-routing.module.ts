import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PhotoPageComponent} from './photo-page/photo-page.component';

const PhotoRoutes: Routes = [
  {
    path: '',
    component: PhotoPageComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(PhotoRoutes)],
  exports: [RouterModule]
})
export class PhotoRoutingModule {}
