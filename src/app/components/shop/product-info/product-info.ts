import { Component } from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product';
import { ProductModel } from '../../../models/product.model';
import {faShareFromSquare,faCircleQuestion,faStar, faEye , faTruck, faSquare } from '@fortawesome/free-regular-svg-icons';
import { faCcVisa, faCcMastercard, faCcAmex, faCcJcb, faCcDiscover, faCcDinersClub, faCcPaypal, } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-product-info',
  imports: [FontAwesomeModule],
  templateUrl: './product-info.html',
  styleUrl: './product-info.scss',
})
export class ProductInfo {
  constructor(private route: ActivatedRoute, private ProductService: ProductService) {}
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
  product: ProductModel | undefined;
  ngOnInit() 
  {

  const id = Number(this.route.snapshot.paramMap.get('id'));

  this.ProductService.GetNewArrivalsData().subscribe(products => {
  this.product = products.find(p => p.ID === id);
  //console.log(this.product);
  });
  }
}
