import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entreprise-freelance',
  templateUrl: './entreprise-freelance.component.html',
  styleUrls: ['./entreprise-freelance.component.css']
})
export class EntrepriseFreelanceComponent implements OnInit {


  image_chart:string="https://images.prismic.io/malt/b6d9e770-56a3-4ab1-961f-91a0e1f09bc6_graphic-corporate-1.svg?auto=compress,format";
  constructor() { }

  ngOnInit(): void {
  }

}
