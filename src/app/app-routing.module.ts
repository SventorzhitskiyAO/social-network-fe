import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {MusicContainerComponent} from './music/music.container.component';

const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'users', loadChildren: () => import('./user/user.module').then(r => r.UserModule)},
  {path: 'music', component: MusicContainerComponent},
  {path: 'dialog', loadChildren: () => import('./dialog/dialog.module').then(r => r.DialogModule)},
  {path: 'photo', loadChildren: () => import('./photo/photo.module').then(r => r.PhotoModule)},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules
      }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
