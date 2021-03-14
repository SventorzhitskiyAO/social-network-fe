import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserInterface} from '../shared/interfaces/user.interface';
import {PostInterface} from '../shared/interfaces/post.interface';

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
  submitUpdate: EventEmitter<UserInterface> = new EventEmitter<UserInterface>();

  myForm: FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl(this.user.firstName),
      login: new FormControl(this.user.login),
      password: new FormControl('', Validators.pattern('[a-zA-Z0-9]{3,30}')),
      passwordConfirm: new FormControl('', Validators.pattern('[a-zA-Z0-9]{3,30}'))
    });
  }

  submit(): void{
    this.submitUpdate.emit(this.myForm.value);
  }

  ImageSrc(): string {
    if (this.user.avatar === '') {
      return '../../../assets/images/user.png';
    }
    return this.user.avatar;
  }
}
