import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OffresServicesComponent } from './offres-services/offres-services.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				component: OffresServicesComponent
			}, 
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class OffresServicesRoutingModule { }
