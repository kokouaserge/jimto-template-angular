import { Component, OnInit, HostListener } from '@angular/core';
declare var $;

@Component({
  selector: 'app-frontend-footer',
  templateUrl: './frontend-footer.component.html',
  styleUrls: ['./frontend-footer.component.css']
})
export class FrontendFooterComponent implements OnInit {
  dateAnnee : any;
  constructor() { 
    this.dateAnnee = new Date().getFullYear();
  }

  ngOnInit(): void {
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll($event) {

    let scrollToTopValue = document.documentElement.scrollTop;


  if(scrollToTopValue >= 600){
      
      if($("#backtotop.visible")){
        $("#backtotop").removeClass('visible');
    }
    $("#backtotop").addClass('visible');

  } else {
      $("#backtotop").removeClass('visible');

  }
}

}
