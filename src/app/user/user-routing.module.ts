import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginPageContainerComponent} from './login-page/login-page.container.component';
import {UsersContainerComponent} from './users-page/users-page.container';
import {CreateUserPageComponent} from './create-user-page/create-user-page.component';
import {UserContainerComponent} from './user-page/user-page.container.component';
import {AuthGuard} from '../shared/guards/auth.guard';
import {IsAuthGuard} from '../shared/guards/isAurhLogin.guard';
import {UserChangeContainerComponent} from './shared/component/user-change/user-change.container.component';
import {FriendComponent} from './shared/component/friend/friend.component';
import {ProfileContainerComponent} from './shared/component/profile/profile.container.component';
import {PostContainerComponent} from './shared/component/post/post.container.component';

const UserRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPageContainerComponent,
    canActivate: [IsAuthGuard]
  },
  {
    path: 'list',
    component: UsersContainerComponent,
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreateUserPageComponent,
    pathMatch: 'full'
  },
  {
    path: ':id',
    component: UserContainerComponent,
    children: [
      {path: '', component: PostContainerComponent, pathMatch: 'full'},
      {path: 'profile', component: ProfileContainerComponent},
      {path: 'setting', component: UserChangeContainerComponent},
      {path: 'friend', component: FriendComponent}
      ],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(UserRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
