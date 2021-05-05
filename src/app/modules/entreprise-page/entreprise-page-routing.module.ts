import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntrepriseComponent } from './entreprise/entreprise.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				component: EntrepriseComponent
			}, 
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class EntreprisePageRoutingModule { }
