import {Component, Input} from '@angular/core';
import {UserInterface} from '../shared/interfaces/user.interface';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-users',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent {
  @Input()
  users: UserInterface[];
  _imageUrlNotSanitized: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ImageSrc(avatar): string | SafeUrl {
    if (avatar === '' || avatar === undefined) {
      return '../../../assets/images/user.png';
    }
    this._imageUrlNotSanitized = this.sanitizer.bypassSecurityTrustUrl('http://localhost:3000/' + avatar);
    return this._imageUrlNotSanitized;
  }
}
