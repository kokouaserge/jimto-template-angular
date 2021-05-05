import { Component, OnInit,OnDestroy } from '@angular/core';
import {StyleManagerService} from 'src/app/core/services/style-manager.service';
declare var $;

@Component({
  selector: 'app-frontend-layout',
  templateUrl: './frontend-layout.component.html',
  styleUrls: ['./frontend-layout.component.css'],
  providers: [StyleManagerService]
})
export class FrontendLayoutComponent implements OnInit,OnDestroy {

  constructor(private _styleManager: StyleManagerService) { }

  ngOnInit(): void {

    this.loadScript();
  
  }



  loadScript() {
    const url="assets/scripts/script.js"
     let node = document.createElement('script');
     node.src = url;
     node.type = 'text/javascript';
     node.async = true;
     node.classList.add('script-manager-landing');
     document.getElementsByTagName('head')[0].appendChild(node);

     
 }

  removeScript() {
    const existingScriptElement = document.head.querySelector(`script.script-manager-landing`);
    if (existingScriptElement) {
     document.head.removeChild(existingScriptElement);
   }
   }
   


     ngOnDestroy(){
      this.removeScript();
    }

}
