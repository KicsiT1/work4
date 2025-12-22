import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  standalone: true,
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {
  // Images
  LeftSideImg:string='/public/assets/images/herosection/left-handmodel.png';
  MiddleUpImg:string='/public/assets/images/herosection/middle up models.png';
  MiddleUpDown:string='/public/assets/images/herosection/middle down models.png';
  RightSideImg:string='/public/assets/images/herosection/right-handmodel.png';
}
