import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PostInterface} from '../../interfaces/post.interface';
import {UserInterface} from '../../interfaces/user.interface';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Output()
  createPost: EventEmitter<PostInterface> = new EventEmitter<PostInterface>();

  @Output()
  deletePost: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  posts: PostInterface[];

  @Input()
  user: UserInterface;
  myForm: FormGroup;
  _imageUrlNotSanitized: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      text: new FormControl(null),
    });

    this._imageUrlNotSanitized = this.sanitizer.bypassSecurityTrustUrl('http://localhost:3000/' + this.user.avatar);
  }

  submit(): void {
    this.createPost.emit(this.myForm.value.text);
    this.myForm.reset('');
  }

  delete(id: string): void {
    this.deletePost.emit(id);
  }

  ImageSrc(): string | SafeUrl {
    if (this.user.avatar === '') {
      return '../../../assets/images/user.png';
    }
    return this._imageUrlNotSanitized;
  }

 timestampToDate(ts): string {
   const d = new Date(ts);
   return ('0' + d.getDate()).slice(-2) + '.' + ('0' + (d.getMonth() + 1)).slice(-2) + '.' + d.getFullYear();
  }
}
