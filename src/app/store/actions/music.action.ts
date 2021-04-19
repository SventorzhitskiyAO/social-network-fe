import {Action} from '@ngrx/store';
import {MusicInterface} from '../../music/shared/interfaces/music.interface';

export enum MusicAction {
  GetMusic = '[Music] GET_MUSIC',
  GetMusicSuccess = '[Music] GET_MUSIC_SUCCESS',
}

export class GetMusic implements Action {
  public readonly type = MusicAction.GetMusic;
}

export class GetMusicSuccess implements Action {
  public readonly type = MusicAction.GetMusicSuccess;

  constructor(public payload: MusicInterface[]) {}
}

export type TMusicActions = (GetMusic | GetMusicSuccess);
