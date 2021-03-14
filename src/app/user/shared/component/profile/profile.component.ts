import {Component, Input, OnInit} from '@angular/core';
import {UserInterface} from '../../interfaces/user.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input()
  user: UserInterface;

  ngOnInit(): void {
  }
}
