import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {UsersService} from './user/shared/services/users.service';
import {appReducer} from './store/reducers/app.reducer';
import {UserEffects} from './store/effects/user.effects';
import {TokenInterceptor} from './shared/auth.interseptor';
import { NotFoundComponent } from './not-found/not-found.component';
import { MusicComponent } from './music/music.component';
import {PostEffects} from './store/effects/post.effects';
import {PostService} from './user/shared/services/post.service';
import {MatSliderModule} from '@angular/material/slider';
import {MusicService} from './music/shared/services/music.service';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import {DialogModule} from './dialog/dialog.module';
import {PhotoService} from './photo/shared/services/photo.service';
import {MusicEffects} from './store/effects/music.effects';
import {MusicContainerComponent} from './music/music.container.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MusicComponent,
    MusicContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSliderModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    EffectsModule.forRoot([UserEffects, PostEffects, MusicEffects]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    FontAwesomeModule,
    NgxAudioPlayerModule,
    DialogModule,
  ],
  providers: [
    UsersService,
    PostService,
    MusicService,
    PhotoService,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
