import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-table',
  templateUrl: './price-table.component.html',
  styleUrls: ['./price-table.component.css']
})
export class PriceTableComponent implements OnInit {


  price_plans : {id:number,title:string, cout: string,periode: string,plan_features: string[],featured:boolean } [] = [
    {
      id:1,
      title:"Basic",
      cout: "Gratuit",
      periode: "Free of charge one standard listing active for 90 days",
      plan_features: [
        "One Listing",
        "90 Days Availability",
        "Non-Featured",
        "Limited Support",
      ],
      featured:false
     },
     {
      id:1,
      title:"Extended",
      cout: "1.000 FCFA",
      periode: "One time fee for one listing, highlighted in search results",
      plan_features: [
        "One Time Fee",
        "One Listing",
        "Lifetime Availability",
        "Featured In Search Results",
        "24/7 Support",
      ],
      featured:true
     },
     {
      id:1,
      title:"Professional",
      cout: "10.000 FCFA",
      periode: "Monthly subscription for unlimited listings and lifetime availability",
      plan_features: [
        "Unlimited Listings",
        "Lifetime Availability",
        "Featured In Search Results",
        "24/7 Support",
      ],
      featured:false
     }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
