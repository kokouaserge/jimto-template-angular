import { Component, OnInit,OnDestroy } from '@angular/core';
import {Title} from '@angular/platform-browser';




@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  providers: [Title]
})
export class LandingComponent implements OnInit  {

 
  constructor(private title: Title) { this.title.setTitle('Bienvenue'); }

  ngOnInit(): void {
  }


}
