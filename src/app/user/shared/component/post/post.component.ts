import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PostInterface} from '../../interfaces/post.interface';

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
  myForm: FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      text: new FormControl(null),
    });
  }

  submit(): void {
    this.createPost.emit(this.myForm.value.text);
    this.myForm.reset('');
  }

  delete(id: string): void {
    this.deletePost.emit(id);
  }
}
