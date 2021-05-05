import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entreprise-banner',
  templateUrl: './entreprise-banner.component.html',
  styleUrls: ['./entreprise-banner.component.css']
})
export class EntrepriseBannerComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {


  }

  trackByFn(index, item) {
    return index;
  }

}
