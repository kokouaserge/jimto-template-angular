import { Component, OnInit} from '@angular/core';
import { StyleManagerService } from "src/app/core/services/style-manager.service";


@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  providers:[StyleManagerService]
})
export class ReviewsComponent implements OnInit {

  reviews = [
    {
      img:"assets/images/happy-client-01.jpg",
      name:"Kathy Brown",
      datatipContent:"Person who left this review actually was a customer",
      DateAdd:"June 2019",
      nbreRatin:5,
      verified:true,
      avisText:"Morbi velit eros, sagittis in facilisis non, rhoncus et erat. Nam posuere tristique sem, eu ultricies tortor imperdiet vitae. Curabitur lacinia neque non metus"
    },
    {
      img:"assets/images/happy-client-02.jpg",
      name:"Bernard Dadie",
      datatipContent:"",
      DateAdd:"June 2019",
      nbreRatin:3,
      verified:false,
      avisText:"Morbi velit eros, sagittis in facilisis non, rhoncus et erat. Nam posuere tristique sem, eu ultricies tortor imperdiet vitae. Curabitur lacinia neque non metus"
    }
  ];

  services = [
    {
      id:1,
      libelle:"Service",
      tipContent:"Quality of customer service and attitude to work with you",
      serviceContent:4.2
    },
    {
      id:1,
      libelle:"Value for Money",
      tipContent:"Overall experience received for the amount spent",
      serviceContent:4.8
    }
  ]
  constructor(private styleCustom: StyleManagerService) { }

  ngOnInit(): void {
  
    
  }


  getWidth(dataRating){
    let data;
      // Rules
      if (dataRating >= 4.0) {
          data = (dataRating/5)*100;
          return   data + "%";
      } else if (dataRating >= 3.0) {
          data = (dataRating/5)*80;
          return   data + "%";
      } else if (dataRating < 3.0) {
          data = (dataRating/5)*60;
          return   data + "%";
      }
  
    
  }

  getClass(dataRating){

      // Rules
      if (dataRating >= 4.0) {
        
          return   'high';
      } else if (dataRating >= 3.0) {
      
          return  'mid';
      } else if (dataRating < 3.0) {

          return   'low';
      }
  
    
  }

  loadStarthtml(ratingNbre:number){
    let data = this.styleCustom.startvalue(ratingNbre);
     return data;
   }



}
