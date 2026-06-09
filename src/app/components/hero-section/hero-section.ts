import { Component } from '@angular/core';
import { FloatingBox } from '../floating-box/floating-box';
import { ArrowUpButton } from '../floatingComponents/arrow-up-button/arrow-up-button';
import { ShopButton } from '../floatingComponents/shop-button/shop-button';
@Component({
  selector: 'app-hero-section',
  imports: [FloatingBox,ArrowUpButton,ShopButton],
  standalone: true,
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {

  // If you need to change an image in the 
  // hero section, you just need to replace the path with the new image.
  // Images (Importent put images to folder public/assets)

  LeftSideImg:string = 'assets/images/herosection/left-handmodel.png';
  MiddleUpImg:string = 'assets/images/herosection/middle up models.png';
  MiddleUpDown:string = 'assets/images/herosection/middle down models.png';
  RightSideImg:string = 'assets/images/herosection/right-handmodel.png';

  // If you want to add a different logo to the partner section, 
  // create a [brand]Logo variable, store the path to the 
  // logo in the variable, and then add it to the LogoIms array.
  // Logos
  
  ChanelLogo:string = 'assets/images/herosection/chanel logo.png';
  LouisVoittonLogo:string = 'assets/images/herosection/Louis Vuitton logo.png';
  PradaLogo:string = 'assets/images/herosection/prada logo.png';
  CalvinKleinLogo:string = 'assets/images/herosection/Colvin Klein logo.png';
  DenimLogo:string = 'assets/images/herosection/Denim logo.png';
  
  // Logos array 
  LogoIms:string[]=[
    this.ChanelLogo,
    this.LouisVoittonLogo,
    this.PradaLogo,
    this.CalvinKleinLogo,
    this.DenimLogo
  ];

}
