import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffresServicesRoutingModule } from './offres-services-routing.module';
import { OffresServicesComponent } from './offres-services/offres-services.component';
import { PriceTableComponent } from './components/price-table/price-table.component';
import { OffresServicesSecuriteComponent } from './components/offres-services-securite/offres-services-securite.component';



@NgModule({
  declarations: [OffresServicesComponent, PriceTableComponent, OffresServicesSecuriteComponent],
  imports: [
    CommonModule,
    OffresServicesRoutingModule
  ]
})
export class OffresServicesModule { }
