import { Component } from '@angular/core';

@Component({
  selector: 'app-follow-us',
  imports: [],
  templateUrl: './follow-us.html',
  styleUrl: './follow-us.scss',
})
export class FollowUs {
  // The pictures I put in array
  readonly Img1:string="assets/images/followUs/image1.png";
  readonly Img2:string="assets/images/followUs/image2.png";
  readonly Img3:string="assets/images/followUs/image3.png";
  readonly Img4:string="assets/images/followUs/image4.png";
  readonly Img5:string="assets/images/followUs/image5.png";
  readonly Img6:string="assets/images/followUs/image6.png";
  readonly Img7:string="assets/images/followUs/image7.png";
  // I am walk-through the array in the template.
  readonly ImgsArry:string[]=[this.Img1,this.Img2,this.Img3,this.Img4,this.Img5,this.Img6,this.Img7];
}
