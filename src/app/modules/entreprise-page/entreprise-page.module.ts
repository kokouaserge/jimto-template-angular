import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntreprisePageRoutingModule } from './entreprise-page-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { EntrepriseBannerComponent } from './components/entreprise-banner/entreprise-banner.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EntrepriseFreelanceComponent } from './components/entreprise-freelance/entreprise-freelance.component';
import { EntrepriseVerifiedComponent } from './components/entreprise-verified/entreprise-verified.component';
import { EntrepriseModeleComponent } from './components/entreprise-modele/entreprise-modele.component';



@NgModule({
  declarations: [EntrepriseBannerComponent, EntrepriseComponent, EntrepriseFreelanceComponent, EntrepriseVerifiedComponent, EntrepriseModeleComponent],
  imports: [
    CommonModule,
    SharedModule,
    SlickCarouselModule,
    EntreprisePageRoutingModule
  ]
})
export class EntreprisePageModule { }
