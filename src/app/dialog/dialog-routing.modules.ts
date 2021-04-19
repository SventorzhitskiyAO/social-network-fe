import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MessageComponent} from './shared/component/message/message.component';

const DialogsRoutes: Routes = [
  {
    path: '',
    redirectTo: 'message',
    pathMatch: 'full'
  },
  {
    path: 'message',
    component: MessageComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(DialogsRoutes)],
  exports: [RouterModule]
})
export class DialogRoutingModule {}
