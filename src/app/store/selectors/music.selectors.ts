import {createFeatureSelector, createSelector} from '@ngrx/store';
import {MusicState} from '../state/music.state';

export const music = createFeatureSelector<MusicState>('music');

export const selectMusicList = createSelector(
  music,
  state => state.music
);
