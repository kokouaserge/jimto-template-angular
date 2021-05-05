import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FreelancePageComponent } from './freelance-page/freelance-page.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				component: FreelancePageComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class FreelanceRoutingModule { }
