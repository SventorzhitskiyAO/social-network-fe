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
    this.generateChangeForm(this.user);
  }

  public generateChangeForm(user): void {
    this.myForm = new FormGroup({
      firstName: new FormControl(user.firstName),
      secondName: new FormControl(user.secondName),
      login: new FormControl(user.login),
      email: new FormControl(user.email),
      facebook: new FormControl(user.facebook),
      vk: new FormControl(user.vk),
      github: new FormControl(user.github),
      instagram: new FormControl(user.instagram),
      skill: new FormControl(user.skill),
      aboutMe: new FormControl(user.aboutMe),
      password: new FormControl('', Validators.pattern('[a-zA-Z0-9]{3,30}')),
      passwordConfirm: new FormControl('', Validators.pattern('[a-zA-Z0-9]{3,30}'))
    });
  }

  submit(): void{
    this.myForm.value.id = this.user._id;
    this.submitUpdate.emit(this.myForm.value);
  }
}
