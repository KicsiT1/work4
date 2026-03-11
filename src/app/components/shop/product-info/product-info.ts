import { Component } from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {faShareFromSquare,faCircleQuestion,faStar, faEye , faTruck, faSquare } from '@fortawesome/free-regular-svg-icons';
import { faCcVisa, faCcMastercard, faCcAmex, faCcJcb, faCcDiscover, faCcDinersClub, faCcPaypal, } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-product-info',
  imports: [FontAwesomeModule],
  templateUrl: './product-info.html',
  styleUrl: './product-info.scss',
})
export class ProductInfo {
  faStar: IconDefinition = faStar;
  faEye: IconDefinition = faEye;
  faCcVisa: IconDefinition = faCcVisa;
  faCcMastercard: IconDefinition = faCcMastercard;
  faCcAmex: IconDefinition = faCcAmex;
  faCcJcb: IconDefinition = faCcJcb;
  faCcDiscover: IconDefinition = faCcDiscover;
  faCcDinersClub: IconDefinition = faCcDinersClub;
  faCcPaypal: IconDefinition = faCcPaypal;
  faTruck: IconDefinition = faTruck;
  faSquare: IconDefinition = faSquare;
  faCircleQuestion: IconDefinition = faCircleQuestion;
  faShareFromSquare: IconDefinition = faShareFromSquare;
}
