import { Component } from '@angular/core';

@Component({
  selector: 'app-outstanding-offer',
  imports: [],
  templateUrl: './outstanding-offer.html',
  styleUrl: './outstanding-offer.scss',
})
export class OutstandingOffer {
  // Section main img
  readonly OutstandingOfferImg1:string="assets/images/outstanding-offer/image.png";
  readonly OutstandingOfferImg2:string="assets/images/outstanding-offer/image2.png";
  // Bannner imgs paths
  readonly HighQualityImg:string="assets/images/outstanding-offer/feature4.png";
  readonly WarranyProtectionImg:string="assets/images/outstanding-offer/feature1.png";
  readonly FreeShippingImg:string="assets/images/outstanding-offer/feature2.png";
  readonly SupportImg:string="assets/images/outstanding-offer/feature3.png";
  readonly BannerImgs:string[]=[this.HighQualityImg,this.WarranyProtectionImg,this.FreeShippingImg,this.SupportImg];
  
}
