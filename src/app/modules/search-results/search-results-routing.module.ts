import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultsPageComponent } from './search-results-page/search-results-page.component';


const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				component: SearchResultsPageComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class SearchResultsRoutingModule { }
