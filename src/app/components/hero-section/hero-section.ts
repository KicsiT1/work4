import { Component } from '@angular/core';
// Font Awesome module need for the icons
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
// This makes it safe to use icons (special type for icons)
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
// The different icons I use for the hero right side
import {faCartShopping,faArrowUp} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-hero-section',
  imports: [FontAwesomeModule],
  standalone: true,
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {
  // Images (Importent put images to folder public/assets)
  LeftSideImg:string = '/public/assets/images/herosection/left-handmodel.png';
  MiddleUpImg:string = '/public/assets/images/herosection/middle up models.png';
  MiddleUpDown:string = '/public/assets/images/herosection/middle down models.png';
  RightSideImg:string = '/public/assets/images/herosection/right-handmodel.png';
  // Logos
  ChanelLogo:string = '/public/assets/images/herosection/chanel logo.png';
  LouisVoittonLogo:string = '/public/assets/images/herosection/Louis Vuitton logo.png';
  PradaLogo:string = '/public/assets/images/herosection/prada logo.png';
  CalvinKleinLogo:string = '/public/assets/images/herosection/Colvin Klein logo.png';
  DenimLogo:string = '/public/assets/images/herosection/Denim logo.png';
  // icons
  faCartShopping:IconDefinition = faCartShopping;
  faArrowUp:IconDefinition = faArrowUp;
}
