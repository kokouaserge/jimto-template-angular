import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule } from "@angular/router";
import {NgxTypedJsModule} from 'ngx-typed-js';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';


import { BannerLandingComponent } from './components/banner-landing/banner-landing.component';
import { LandingStepComponent } from './components/landing-step/landing-step.component';
import { LandingCategoriesComponent } from './components/landing-categories/landing-categories.component';
import { LandingVilleFeaturedComponent } from './components/landing-ville-featured/landing-ville-featured.component';
import { LandingArticlesComponent } from './components/landing-articles/landing-articles.component';



@NgModule({
  declarations: [LandingComponent, BannerLandingComponent,  LandingStepComponent, LandingCategoriesComponent, LandingVilleFeaturedComponent, LandingArticlesComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    NgxTypedJsModule,
    SlickCarouselModule,
    RouterModule,
    SharedModule,
    ModalModule.forRoot(),
  ]
})
export class LandingPageModule { }
