import { Component, OnInit,Input } from '@angular/core';
import { StyleManagerService } from "src/app/core/services/style-manager.service";

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.css'],
  providers:[StyleManagerService]
})
export class TitlebarComponent implements OnInit {

  @Input() title:string;
  @Input() categorie:string;
  @Input() location:string;
  @Input() avis:number;
  @Input() nbreRating:number;

  constructor(private styleCustom: StyleManagerService) { }

  ngOnInit(): void {

  }


  loadStarthtml(){
   let data = this.styleCustom.startvalue(this.nbreRating);
    return data += '<div class="rating-counter"><a href="#listing-reviews">( '+this.avis +' Avis)</a></div>';
  }

  

}
