import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entreprise-verified',
  templateUrl: './entreprise-verified.component.html',
  styleUrls: ['./entreprise-verified.component.css']
})
export class EntrepriseVerifiedComponent implements OnInit {


  images_verified :{ id:number, src:string }[] = [

    { id:1, src:"https://images.prismic.io/malt/2438c8b6-4138-4c05-840f-4ffb5c8c9e5b_talent-profile-1.jpg?auto=compress,format" },
    { id:2, src:"https://images.prismic.io/malt/a794d119-48be-4954-8e4a-1abd296eaff2_talent-profile-2.jpg?auto=compress,format" },
    { id:3, src:"https://images.prismic.io/malt/5489bc98-1f65-4554-83ca-6dfc88ed2285_talent-profile-3.jpg?auto=compress,format" }


  ];
  constructor() { }

  ngOnInit(): void {
  }

}
