import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';
import {MusicService} from '../../music/shared/services/music.service';
import {GetMusic, GetMusicSuccess, MusicAction} from '../actions/music.action';
import {MusicInterface} from '../../music/shared/interfaces/music.interface';

@Injectable()
export class MusicEffects {
  constructor(
    private musicService: MusicService,
    private actions$: Actions,
  ) {}

  getMusic$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<GetMusic>(MusicAction.GetMusic),
      switchMap(() => this.musicService.getAll()),
      map((music: MusicInterface[]) => new GetMusicSuccess(music))
    );
  });
}
