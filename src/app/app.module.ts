import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {UsersService} from './user/shared/services/users.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {appReducer} from './store/reducers/app.reducer';
import {UserEffects} from './store/effects/user.effects';
import {ConfigEffects} from './store/effects/config.effects';
import {TokenInterceptor} from './shared/auth.interseptor';
import { NotFoundComponent } from './not-found/not-found.component';
import { MusicComponent } from './music/music.component';
import { MeetingComponent } from './meeting/meeting.component';
import { DialogComponent } from './dialog/dialog.component';
import {PostEffects} from './store/effects/post.effects';
import {PostService} from './user/shared/services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MusicComponent,
    MeetingComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    EffectsModule.forRoot([UserEffects, ConfigEffects, PostEffects]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
  ],
  providers: [
    UsersService,
    PostService,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
