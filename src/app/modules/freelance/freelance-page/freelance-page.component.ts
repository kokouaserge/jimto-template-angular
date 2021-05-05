import { Component, OnInit,HostListener,AfterContentInit,OnDestroy } from '@angular/core';
import { StyleManagerService } from "src/app/core/services/style-manager.service";
declare var $;

@Component({
  selector: 'app-freelance-page',
  templateUrl: './freelance-page.component.html',
  styleUrls: ['./freelance-page.component.css']
})
export class FreelancePageComponent implements OnInit,OnDestroy,AfterContentInit {
  

  slideConfig = {
    "centerMode": true,
		"centerPadding": '20%',
		"slidesToShow": 2,
		"responsive": [
			{
			  "breakpoint": 1367,
        "settings": {
			    "centerPadding": '15%'
			  }
			},
			{
			  "breakpoint": 1025,
			  "settings": {
			    "centerPadding": '0'
			  }
			},
			{
			  "breakpoint": 767,
			  "settings": {
			    "centerPadding": '0',
			    "slidesToShow": 1
			  }
			}
		]
  };
  banner_slider_images:any = [];

   title:string="Albert Kouassi";
   location:string="Cocody Phamarcie Mermoz, Abidjan, Cote D ivoire";
   avis:number= 12;
   nbreRating:number =3.5;
   categorie:string="Bras-droit";
   datepickerConfig = {
    dateInputFormat: 'YYYY-MM-DD',
    rangeInputFormat : 'DD-MM-YYYY',
    containerClass: 'theme-orange',
    isAnimated: true,
    adaptivePosition: true,
    returnFocusToInput: true
	}

  constructor(private styleCustom: StyleManagerService) { 

        for (let i = 1; i <= 4; i++) {
          const src = 'assets/images/single-listing-0' + i + '.jpg';
          this.banner_slider_images.push(src);
        }
  }

  ngOnInit(): void {
   
  }

 
  ngAfterContentInit (){

     /* load Magnific Plugin for galery */
    this.styleCustom.loadMagnicPlugin();

     /* load sticky listing and other */
    this.styleCustom.loadStickyPlugin(); 
    
  }
 


  /* scroll effet for listings nav */

      @HostListener("window:scroll", ["$event"])
      onWindowScroll($event) {
           if(document.getElementById("listing-nav") !== null) { 
                var window_top = document.documentElement.scrollTop;

                var div_top = 0;
                if($('.listing-nav').length){
                  div_top = $('.listing-nav').not('.listing-nav-container.cloned .listing-nav').offset().top + 90;
                }
                                              

                if (window_top > div_top) {
                  $('.listing-nav-container.cloned').addClass('stick');
              } else {
                  $('.listing-nav-container.cloned').removeClass('stick');
              }
          }
    }

   

     
      ngOnDestroy(){
        $( ".listing-nav-container" ).remove();
      }
}
