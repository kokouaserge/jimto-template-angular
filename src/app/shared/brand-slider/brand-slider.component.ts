import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-slider',
  templateUrl: './brand-slider.component.html',
  styleUrls: ['./brand-slider.component.css']
})
export class BrandSliderComponent implements OnInit {


  brand_slider_imgs :String[] = [
    "assets/images/logo-01.png", "assets/images/logo-02.png","assets/images/logo-03.png","assets/images/logo-04.png",
    "assets/images/logo-05.png", "assets/images/logo-06.png", "assets/images/logo-07.png"
  ];
  slideConfig = {
    "infinite": true,
    "slidesToShow": 5,
    "slidesToScroll": 4,
    "dots": true,
    "arrows": true,
		"responsive": [
		    {
		      "breakpoint": 992,
		      "settings": {
		        "slidesToShow": 3,
		        "slidesToScroll": 3
		      }
		    },
		    {
		      "breakpoint": 769,
		      "settings": {
		        "slidesToShow": 1,
		        "slidesToScroll": 1
		      }
		    }
	  ]
	};

  constructor() { }

  ngOnInit(): void {
  }

  trackByFn(index, item) {
    return index;
  }

}
