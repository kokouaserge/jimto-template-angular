import { Component, OnInit,EventEmitter, Output,Input, AfterViewInit  } from '@angular/core';
import { StyleManagerService } from "src/app/core/services/style-manager.service";


@Component({
  selector: 'app-filtering-section',
  templateUrl: './filtering-section.component.html',
  styleUrls: ['./filtering-section.component.css']
})
export class FilteringSectionComponent implements OnInit, AfterViewInit {

  @Input() displayMode:string ='list';
  @Output() changeMode: EventEmitter<any> = new EventEmitter();
  panelActive:string;
  constructor(private styleCustom: StyleManagerService) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    this.styleCustom.loadRangerPlugin();
  }

  OnchangeMode(mode:string){

    this.displayMode = mode;
    this.changeMode.emit(this.displayMode);

  }

  OnchangePanelDropdown(mode:string){

    if(this.panelActive == mode){
      this.panelActive = null;
    }
    else{
      this.panelActive = mode;
    }
 

  }




}
