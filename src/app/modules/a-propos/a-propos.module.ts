import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AProposRoutingModule } from './a-propos-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AProposComponent } from './a-propos/a-propos.component';
import { AProposBannerComponent } from './components/a-propos-banner/a-propos-banner.component';
import { AProposMissionComponent } from './components/a-propos-mission/a-propos-mission.component';



@NgModule({
  declarations: [AProposComponent, AProposBannerComponent, AProposMissionComponent],
  imports: [
    CommonModule,
    AProposRoutingModule,
    SharedModule
  ]
})
export class AProposModule { }
