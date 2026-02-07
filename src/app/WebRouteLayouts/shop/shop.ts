import { Component } from '@angular/core';
import { NavBar } from '../../components/nav-bar/nav-bar';
import { Shop } from '../../components/shop/shop';
import { OutstandingOffer } from '../../components/outstanding-offer/outstanding-offer';
import { FollowUs } from '../../components/follow-us/follow-us'; 
import { UserFeedback } from '../../components/user-feedback/user-feedback';
import { SubscribeToNews } from '../../components/subscribe-to-news/subscribe-to-news';
import { Footer } from '../../components/footer/footer'; 
@Component({
  selector: 'app-shop',
  imports: [NavBar,Shop,OutstandingOffer,FollowUs,UserFeedback,SubscribeToNews,Footer],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class shop {}