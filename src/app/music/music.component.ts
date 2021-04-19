import {Component, Input, OnInit} from '@angular/core';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  @Input()
  musics: Track[];

  DisplayPlayList = true;
  PageSizeOptions = [10, 25, 50];
  DisplayVolumeControls = true;
  DisplayRepeatControls = true;
  DisplayArtist = false;
  DisplayDuration = false;
  DisablePositionSlider = false;

  ngOnInit(): void {
    Object.preventExtensions(this.musics);
  }
}
