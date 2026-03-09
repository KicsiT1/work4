import { Component } from '@angular/core';
import { NavBar } from '../../components/nav-bar/nav-bar';
import { ProductInfo } from '../../components/shop/product-info/product-info';
import { CurrentOffer } from '../../components/current-offer/current-offer';
import { OutstandingOffer } from '../../components/outstanding-offer/outstanding-offer';
import { SubscribeToNews } from '../../components/subscribe-to-news/subscribe-to-news';
import { Footer } from '../../components/footer/footer'; 

@Component({
  selector: 'app-productinfo',
  imports: [
    NavBar,
    ProductInfo,
    CurrentOffer,
    OutstandingOffer,
    SubscribeToNews,
    Footer
  ],
  templateUrl: './productinfo.html',
  styleUrl: './productinfo.css',
})
export class productinfo {

}
