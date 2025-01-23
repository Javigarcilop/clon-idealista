import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostAdRoutingModule } from './post-ad-routing.module';
import { PostAdFormComponent } from './post-ad-form/post-ad-form.component';


@NgModule({
  declarations: [
    PostAdFormComponent
  ],
  imports: [
    CommonModule,
    PostAdRoutingModule
  ]
})
export class PostAdModule { }
