import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { BrandSliderComponent } from './brand-slider/brand-slider.component';



@NgModule({
  declarations: [ BrandSliderComponent,],
  imports: [
    CommonModule,
    NgxTypedJsModule,
    SlickCarouselModule,
    ModalModule.forRoot(),
  ],
  exports:[ BrandSliderComponent,]
})
export class SharedModule { }
