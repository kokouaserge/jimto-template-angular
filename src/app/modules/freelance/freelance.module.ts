import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { DatepickerModule,BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { FreelanceRoutingModule } from "./freelance-routing.module";
import { FreelancePageComponent } from './freelance-page/freelance-page.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AddReviewComponent } from './add-review/add-review.component';



@NgModule({
  declarations: [FreelancePageComponent, TitlebarComponent, ReviewsComponent, AddReviewComponent],
  imports: [
    CommonModule,
    RouterModule,
    FreelanceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot()
  ]
})
export class FreelanceModule { }
