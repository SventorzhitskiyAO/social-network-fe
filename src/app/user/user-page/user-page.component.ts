import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserInterface} from '../shared/interfaces/user.interface';
import {PostInterface} from '../shared/interfaces/post.interface';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit{
  @Input()
  user: UserInterface;

  @Input()
  me: UserInterface;

  @Input()
  post: PostInterface[];

  @Output()
  submitUpdate: EventEmitter<any> = new EventEmitter<any>();

  fileToUpload: File = null;
  _imageUrlNotSanitized: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this._imageUrlNotSanitized = this.sanitizer.bypassSecurityTrustUrl('http://localhost:3000/' + this.user.avatar);
  }

  ImageSrc(): string | SafeUrl {
    if (this.user.avatar === '' || this.user.avatar === undefined) {
      return '../../../assets/images/user.png';
    }
    return this._imageUrlNotSanitized;
  }

  onChangeImg(): any {
    document.querySelector<HTMLElement>('#photo').click();
  }

  changeImg(event: any): void {
    this.fileToUpload = (event.target.files[0] as File);

    const fd = new FormData();
    fd.append('image', this.fileToUpload, this.fileToUpload.name);
    this.submitUpdate.emit(fd);
  }
}
