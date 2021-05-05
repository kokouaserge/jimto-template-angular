import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FrontendLayoutComponent } from './frontend-layout/frontend-layout.component';
import { FrontendHeaderComponent } from './frontend-header/frontend-header.component';
import { FrontendFooterComponent } from './frontend-footer/frontend-footer.component';
 


@NgModule({
  declarations: [FrontendLayoutComponent, FrontendHeaderComponent, FrontendFooterComponent],
  imports: [
    CommonModule,
    RouterModule,
		FormsModule,
		ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  exports:[FrontendLayoutComponent]
})
export class LayoutsModule { }
