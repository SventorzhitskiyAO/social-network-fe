import { ChangeDetectorRef, Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../shared/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    public ser: UsersService,
    // public cd: ChangeDetectorRef
  ) {}

  @Output()
  submitLog: EventEmitter<UsersService> = new EventEmitter<UsersService>();

  myForm: FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      login: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  login(): void{
    this.submitLog.emit(this.myForm.value);
    // this.ser.errors$.subscribe(res => {
    //   console.log(res);
    // });
    setTimeout(() => {
      this.ser.errors$.subscribe(res => {
        console.log(res);
      });
    }, 2000);
  }
}
