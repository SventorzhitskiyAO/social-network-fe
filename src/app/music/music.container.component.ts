import {Component, OnInit} from '@angular/core';

import { Store} from '@ngrx/store';
import {selectMusicList} from '../store/selectors/music.selectors';
import {GetMusic} from '../store/actions/music.action';
import {AppState} from '../store/state/app.state';

@Component({
  selector: 'app-music-container',
  template: `<app-music *ngIf="musics$ | async as music" [musics]="music"></app-music>`,
})
export class MusicContainerComponent implements OnInit{
  musics$ = this.store.select(selectMusicList);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(new GetMusic());
  }
}
