import { Component, OnInit,TemplateRef, HostListener,AfterContentInit} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { StyleManagerService } from "src/app/core/services/style-manager.service";
declare var $;
@Component({
  selector: 'app-frontend-header',
  templateUrl: './frontend-header.component.html',
  styleUrls: ['./frontend-header.component.css']
})
export class FrontendHeaderComponent implements OnInit,AfterContentInit {

  isCollapsed :boolean;
  modalRef: BsModalRef;
  modalRefFor: BsModalRef;
  config = {
    animated: true,
  };
  fieldTextTypeLogin:boolean;
  fieldType:string = "password" ;

  userIsLogin:boolean = false ;
  constructor(private modalService: BsModalService,
              private styleCustom: StyleManagerService) { }

  ngOnInit(): void {
 
  }

  openModal(template: TemplateRef<any>) {
     this.modalRef = this.modalService.show(template, this.config);
   }
 
   OpenWithCloseModal(template: TemplateRef<any>) {
     this.modalRef.hide();
      this.modalRef = this.modalService.show(template, this.config);
    }
 
   
 
   toggleFieldTextTypeLogin(){
     this.fieldTextTypeLogin = !this.fieldTextTypeLogin;
         if(this.fieldType == "text"){
             this.fieldType = "password";
         }
         else{ 
            this.fieldType = "text";
         }
    }

    ngAfterContentInit(){
      this.styleCustom.loadMenuMobilePlugin();
     }


    @HostListener("window:scroll", ["$event"])
      onWindowScroll($event) {

        let scrollToTopValue = document.documentElement.scrollTop;

 
      if(scrollToTopValue >= 140){
            if($("#header.cloned")){
                $("#header").removeClass('cloned');
                $("#header").removeClass('sticky');
            }
            $("#header").addClass('cloned sticky');
      } else {
              $("#header").removeClass('cloned');
              $("#header").removeClass('sticky');

      }
}

}
