import { NgModule } from '@angular/core';
import { Routes, RouterModule,ExtraOptions } from '@angular/router';
import { FrontendLayoutComponent } from './core/layouts/frontend-layout/frontend-layout.component';

const routes: Routes = [

  {
		path: '',
		redirectTo: 'landing',
		pathMatch: 'full'
	},
  {
		path: '',
    component: FrontendLayoutComponent,
    children:[
      { path: "landing",
       pathMatch: 'full',
       loadChildren: () => import('./modules/landing-page/landing-page.module').then(m => m.LandingPageModule)
      },
       { path: "entreprise", 
        pathMatch: 'full',
        loadChildren: () => import('./modules/entreprise-page/entreprise-page.module').then(m => m.EntreprisePageModule)
      },
      { path: "offres-et-services", 
        pathMatch: 'full',
        loadChildren: () => import('./modules/offres-services/offres-services.module').then(m => m.OffresServicesModule)
      },
      { path: "a-propos", 
        pathMatch: 'full',
        loadChildren: () => import('./modules/a-propos/a-propos.module').then(m => m.AProposModule)
      },
      { path: "recherche", 
        pathMatch: 'full',
        loadChildren: () => import('./modules/search-results/search-results.module').then(m => m.SearchResultsModule)
      },
     { path: "freelance", 
        pathMatch: 'full',
        loadChildren: () => import('./modules/freelance/freelance.module').then(m => m.FreelanceModule)
      },

      // // Handle all other routes
	{ path: '**', redirectTo: '' }

    ]
	},

];

const config: ExtraOptions = {
	scrollPositionRestoration: 'top'
};

@NgModule({
  imports: [RouterModule.forRoot(routes,config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
