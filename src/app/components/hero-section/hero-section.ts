import { Component } from '@angular/core';
// Font Awesome module need for the icons
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
// This makes it safe to use icons (special type for icons)
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
// The different icons I use for the hero right side
import {faCartShopping,faArrowUp} from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  imports: [FontAwesomeModule,RouterModule],
  standalone: true,
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {

  // If you need to change an image in the 
  // hero section, you just need to replace the path with the new image.
  // Images (Importent put images to folder public/assets)

  LeftSideImg:string = '/public/assets/images/herosection/left-handmodel.png';
  MiddleUpImg:string = '/public/assets/images/herosection/middle up models.png';
  MiddleUpDown:string = '/public/assets/images/herosection/middle down models.png';
  RightSideImg:string = '/public/assets/images/herosection/right-handmodel.png';

  // If you want to add a different logo to the partner section, 
  // create a [brand]Logo variable, store the path to the 
  // logo in the variable, and then add it to the LogoIms array.
  // Logos
  
  ChanelLogo:string = '/public/assets/images/herosection/chanel logo.png';
  LouisVoittonLogo:string = '/public/assets/images/herosection/Louis Vuitton logo.png';
  PradaLogo:string = '/public/assets/images/herosection/prada logo.png';
  CalvinKleinLogo:string = '/public/assets/images/herosection/Colvin Klein logo.png';
  DenimLogo:string = '/public/assets/images/herosection/Denim logo.png';

  // Logos array 
  LogoIms:string[]=[
    this.ChanelLogo,
    this.LouisVoittonLogo,
    this.PradaLogo,
    this.CalvinKleinLogo,
    this.DenimLogo
  ];
  // icons
  faCartShopping:IconDefinition = faCartShopping;
  faArrowUp:IconDefinition = faArrowUp;
}
