import {Component} from '@angular/core';
// Font Awesome module need for the icons
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
// This makes it safe to use icons (special type for icons)
import {IconDefinition,} from '@fortawesome/fontawesome-svg-core';
// The different icons I use for the hero right side 
import {faAngleLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-current-offer',
  imports: [FontAwesomeModule],
  templateUrl: './current-offer.html',
  styleUrl: './current-offer.scss',
})
export class CurrentOffer {
  faAngleLeft:IconDefinition=faAngleLeft;
  faAngleRight:IconDefinition=faAngleRight;
  Product1:string='/public/assets/images/currentOffer/p1.png';
  Product2:string='/public/assets/images/currentOffer/p2.png';
  Product3:string='/public/assets/images/currentOffer/p3.png';

}
