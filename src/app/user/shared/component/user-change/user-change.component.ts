import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserInterface} from '../../interfaces/user.interface';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-change',
  templateUrl: './user-change.component.html',
  styleUrls: ['./user-change.component.scss']
})
export class UserChangeComponent implements OnInit {
  @Output()
  submitUpdate: EventEmitter<UserInterface> = new EventEmitter<UserInterface>();

  @Input()
  user: UserInterface;

  myForm: FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      firstName: new FormControl(this.user.firstName),
      secondName: new FormControl(this.user.secondName),
      login: new FormControl(this.user.login),
      email: new FormControl(this.user.email),
      facebook: new FormControl(this.user.facebook),
      vk: new FormControl(this.user.vk),
      github: new FormControl(this.user.github),
      instagram: new FormControl(this.user.instagram),
      skill: new FormControl(this.user.skill),
      aboutMe: new FormControl(this.user.aboutMe),
      password: new FormControl('', Validators.pattern('[a-zA-Z0-9]{3,30}')),
      passwordConfirm: new FormControl('', Validators.pattern('[a-zA-Z0-9]{3,30}'))
    });
  }

  submit(): void{
    this.myForm.value.id = this.user._id;
    this.submitUpdate.emit(this.myForm.value);
  }
}
