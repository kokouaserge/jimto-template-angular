import { Component, OnInit } from '@angular/core';
import { StyleManagerService } from "src/app/core/services/style-manager.service";

@Component({
  selector: 'app-search-results-page',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.css'],
  providers:[StyleManagerService]
})
export class SearchResultsPageComponent implements OnInit {

  displayMode:string='list';

 items = [
    {
      id:1,
      img:"assets/images/listing-item-01.jpg",
      libelle:"Albert Kouassi",
      location:"Cocody Phamarcie Mermoz, Abidjan, Cote D ivoire",
      avisNbre: 12,
      ratingNbre:3.5,
      categorie:"Bras-droit",
      favorite:true,
      verified:true
    },
    {
      id:2,
      img:"assets/images/listing-item-02.jpg",
      libelle:"Albert Kouassi Test",
      location:"Cocody Phamarcie Mermoz, Abidjan, Cote D ivoire",
      avisNbre: 23,
      ratingNbre:5,
      categorie:"Body guard",
      favorite:false,
      verified:false
    },
    {
      id:3,
      img:"assets/images/listing-item-03.jpg",
      libelle:"Albert Kouassi Test",
      location:"Cocody Phamarcie Mermoz, Abidjan, Cote D ivoire",
      avisNbre: 17,
      ratingNbre:2.0,
      categorie:"Body guard",
      favorite:false,
      verified:false
    }
  ]
  constructor(private styleCustom: StyleManagerService) { }

  ngOnInit(): void {
  }

  changeMode(event:any){
    this.displayMode = event;
  }

  loadStarthtml(ratingNbre:number,avisNbre:number){
    let data = this.styleCustom.startvalue(ratingNbre);
     return data += '<div class="rating-counter"><a href="#listing-reviews">( '+avisNbre +' Avis)</a></div>';
   }

 
}
