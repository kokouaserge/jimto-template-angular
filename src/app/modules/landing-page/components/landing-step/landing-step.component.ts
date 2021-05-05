import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-step',
  templateUrl: './landing-step.component.html',
  styleUrls: ['./landing-step.component.css']
})
export class LandingStepComponent implements OnInit {


  step_image_one :string = "https://images.prismic.io/malt/ba4fe606-59e5-4849-a9d1-60419c5c6d35_homepage-illu-recrutment-1.png?auto=compress,format";
  step_image_two :string = "https://images.prismic.io/malt/d67a6146-92e7-4b96-870f-2bc5aa52cbfd_homepage-illu-recrutment-2.png?auto=compress,format";
  step_image_three :string = "https://images.prismic.io/malt/6b2f9a67-195d-407e-9517-c38d720c2220_homepage-illu-recrutment-3.png?auto=compress,format";
  constructor() { }

  ngOnInit(): void {
  }

}
