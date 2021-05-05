import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { StyleManagerService } from "src/app/core/services/style-manager.service";


@Component({
  selector: 'app-banner-landing',
  templateUrl: './banner-landing.component.html',
  styleUrls: ['./banner-landing.component.css']
})
export class BannerLandingComponent implements OnInit, AfterViewInit {

  categories :{title:string, value:string } []= [
    {
    title:'Bodyguard',
    value:'bodyguard' 
  },
  {
    title:'Bras droit',
    value:'bras-droit' 
  },
  { 
    title:'Autre',
    value:'other' 
  }

  ];

  banner_slider_images :String[]= [
    "https://images.prismic.io/malt/cfd4e226-65e5-4631-8bf9-71cee84a5140_homepage-header-EmmanuelleT.png?auto=compress,format",
     "https://images.prismic.io/malt/2894354e-17ee-4940-a035-ae307821b6ab_hompegae-header-ManuelT.png?auto=compress,format",
     "https://images.prismic.io/malt/652b96fa-a91a-4e09-a117-fd53dda99b42_homepage-header-Ce%CC%81cile.png?auto=compress,format"
  ];
  slideConfig = {
  "infinite": true,
  "slidesToShow": 1,
  "slidesToScroll": 1,
  "dots": true,
  "arrows": false,
  "autoplay": true,
  "autoplaySpeed": 5000,
  "speed": 1000,
  "fade": true,
  "cssEase": 'linear'};

  constructor(private router: Router,
              private styleCustom: StyleManagerService) { }

  ngOnInit(): void {

    
  }

  ngAfterViewInit(){
    this.styleCustom.loadSelectPlugin();
  }

  trackByFn(index, item) {
    return index;
  }

  onClickRoute(){
    this.router.navigate(['./recherche']);
  }


}
