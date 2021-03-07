import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {MusicComponent} from './music/music.component';
import {MeetingComponent} from './meeting/meeting.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {DialogComponent} from './dialog/dialog.component';

const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'users', loadChildren: () => import('./user/user.module').then(r => r.UserModule)},
  {path: 'music', component: MusicComponent},
  {path: 'meeting', component: MeetingComponent},
  {path: 'dialog', component: DialogComponent},
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
