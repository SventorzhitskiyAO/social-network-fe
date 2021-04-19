import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../shared/services/photo.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/state/app.state';
import {authMe} from '../../store/selectors/user.selectors';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-photo-page',
  templateUrl: './photo-page.component.html',
  styleUrls: ['./photo-page.component.scss']
})
export class PhotoPageComponent implements OnInit {
  photos;
  me;
  myForm: FormGroup;
  fileToUpload: File = null;

  constructor(private photoService: PhotoService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(authMe).subscribe(me => this.me = me);
    this.photoService.getPhotos(this.me._id).subscribe(r => this.photos = r);

    this.myForm = new FormGroup({
      text: new FormControl(),
      fd: new FormControl()
    });

  }

  addNewPhoto(): void {
    document.querySelector('.bg').classList.toggle('active');
  }

  clickForm(event): void {
    event.stopPropagation();
  }

  submit(): void {
    const fd = new FormData();
    fd.append('image', this.fileToUpload, this.fileToUpload.name);
    fd.append('text', this.myForm.value.text);
    fd.append('user', this.me._id);
    this.photoService.addPhoto(fd);
  }

  OnChange(event): void {
    this.fileToUpload = (event.target.files[0] as File);
  }

  toggleGallery(): void {
    document.querySelector('.photo-gallery').classList.toggle('active');
  }

  delete(id: string): void {
    this.photoService.deletePhoto(id);
  }
}
