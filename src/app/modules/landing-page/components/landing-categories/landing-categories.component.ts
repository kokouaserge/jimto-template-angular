import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-categories',
  templateUrl: './landing-categories.component.html',
  styleUrls: ['./landing-categories.component.css']
})
export class LandingCategoriesComponent implements OnInit {

  constructor() { }

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
    title:'Tout Homme',
    value:'bras-droit' 
  },
  {
    title:'Force',
    value:'bras-droit' 
  },
  {
    title:'Autre',
    value:'other' 
  }

  ];

  ngOnInit(): void {
  }

  trackByFn(index, item) {
    return index;
  }
}
