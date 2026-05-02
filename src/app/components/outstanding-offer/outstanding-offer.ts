import { Component } from '@angular/core';

@Component({
  selector: 'app-outstanding-offer',
  imports: [],
  templateUrl: './outstanding-offer.html',
  styleUrl: './outstanding-offer.scss',
})
export class OutstandingOffer {
  // Section main img
  readonly OutstandingOfferImg1:string="/public/assets/images/outstanding-offer/image.png";
  readonly OutstandingOfferImg2:string="/public/assets/images/outstanding-offer/image2.png";
  // Bannner imgs paths
  readonly HighQualityImg:string="/public/assets/images/outstanding-offer/feature4.png";
  readonly WarranyProtectionImg:string="/public/assets/images/outstanding-offer/feature1.png";
  readonly FreeShippingImg:string="/public/assets/images/outstanding-offer/feature2.png";
  readonly SupportImg:string="/public/assets/images/outstanding-offer/feature3.png";
  readonly BannerImgs:string[]=[this.HighQualityImg,this.WarranyProtectionImg,this.FreeShippingImg,this.SupportImg];
  
}
