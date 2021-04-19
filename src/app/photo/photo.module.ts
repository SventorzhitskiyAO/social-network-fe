import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoPageComponent } from './photo-page/photo-page.component';
import {PhotoRoutingModule} from './photo-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [PhotoPageComponent],
  imports: [
    CommonModule,
    PhotoRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    IvyCarouselModule,
    MatButtonModule,
  ]
})
export class PhotoModule { }
