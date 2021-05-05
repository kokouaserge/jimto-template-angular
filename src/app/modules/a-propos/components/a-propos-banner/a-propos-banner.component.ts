import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-propos-banner',
  templateUrl: './a-propos-banner.component.html',
  styleUrls: ['./a-propos-banner.component.css']
})
export class AProposBannerComponent implements OnInit {


  video_data:{video: string, img:string }= {video: "assets/images/main-search-video.mp4", img:"assets/images/main-search-video-poster.jpg" }
  constructor() { }

  ngOnInit(): void {
  }

}
