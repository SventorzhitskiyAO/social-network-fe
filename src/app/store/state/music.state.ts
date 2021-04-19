import {MusicInterface} from '../../music/shared/interfaces/music.interface';

export interface MusicState {
  music: MusicInterface[];
}

export const initialMusicState: MusicState = {
  music: []
};
