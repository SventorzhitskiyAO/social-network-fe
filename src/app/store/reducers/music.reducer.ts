import {initialMusicState, MusicState} from '../state/music.state';
import {MusicAction, TMusicActions} from '../actions/music.action';

export const musicReducer = (state = initialMusicState, action: TMusicActions): MusicState => {
  switch (action.type) {
    case MusicAction.GetMusic:
      return {
        ...state,
        music: []
      };
    case MusicAction.GetMusicSuccess:
      return {
        ...state,
        music: action.payload
      };
    default:
      return state;
  }
};
