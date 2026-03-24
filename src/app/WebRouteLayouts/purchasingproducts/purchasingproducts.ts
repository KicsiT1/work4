import { Component } from '@angular/core';
import { NavBar } from '../../components/nav-bar/nav-bar';
import { PurchasingProducts } from '../../components/shop/purchasing-products/purchasing-products';
import { SubscribeToNews } from '../../components/subscribe-to-news/subscribe-to-news';
import { Footer } from '../../components/footer/footer';
@Component({
  selector: 'app-purchasingproducts',
  imports: [
    NavBar,
    PurchasingProducts,
    SubscribeToNews,
    Footer
  ],
  templateUrl: './purchasingproducts.html',
  styleUrl: './purchasingproducts.css',
})
export class Purchasingproducts {

}
