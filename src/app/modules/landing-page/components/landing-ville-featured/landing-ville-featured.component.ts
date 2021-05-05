import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-ville-featured',
  templateUrl: './landing-ville-featured.component.html',
  styleUrls: ['./landing-ville-featured.component.css']
})
export class LandingVilleFeaturedComponent implements OnInit {

  
  villes :{title:string, img_src:string } []= [
    {
    title:'Abidjan',
    img_src:'assets/images/popular-location-01.jpg' 
  },
  {
    title:'Bouake',
    img_src:'assets/images/popular-location-02.jpg' 
  },
  {
    title:'Man',
    img_src:'assets/images/popular-location-03.jpg' 
  },
  {
    title:'Yamoussoukro',
    img_src:'assets/images/popular-location-04.jpg' 
  }

  ];
  constructor() { }

  ngOnInit(): void {
  }

  trackByFn(index, item) {
    return index;
  }

}
