import { Component, OnInit, AfterViewInit } from '@angular/core';
import { StyleManagerService } from "src/app/core/services/style-manager.service";


@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit, AfterViewInit {

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
  constructor(private styleCustom: StyleManagerService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.styleCustom.loadSelectPlugin();
  }
  
  trackByFn(index, item) {
    return index;
  }

}
