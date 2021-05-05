import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchResultsPageComponent } from './search-results-page/search-results-page.component';
import { FormSearchComponent } from './form-search/form-search.component';
import { SearchResultsRoutingModule } from "./search-results-routing.module";
import { TitleBarComponent } from './title-bar/title-bar.component';

import { FilteringSectionComponent } from './filtering-section/filtering-section.component';



@NgModule({
  declarations: [SearchResultsPageComponent, FormSearchComponent, TitleBarComponent, FilteringSectionComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SearchResultsRoutingModule
  ]
})
export class SearchResultsModule { }
