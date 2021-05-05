import { BrowserModule, } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { LayoutsModule } from "./core/layouts/layouts.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
		LayoutsModule,
    Ng2PageScrollModule,
		RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
