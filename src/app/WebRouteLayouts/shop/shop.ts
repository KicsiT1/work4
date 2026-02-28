import { Component } from '@angular/core';
import { NavBar } from '../../components/nav-bar/nav-bar';
import { Shop } from '../../components/shop/shop';
import { OutstandingOffer } from '../../components/outstanding-offer/outstanding-offer';
import { FollowUs } from '../../components/follow-us/follow-us'; 
import { SubscribeToNews } from '../../components/subscribe-to-news/subscribe-to-news';
import { Footer } from '../../components/footer/footer'; 
import { FloatingBox } from '../../components/floating-box/floating-box';
import { ArrowUpButton } from '../../components/floatingComponents/arrow-up-button/arrow-up-button';

@Component({
  selector: 'app-shop',
  imports: [NavBar,FloatingBox,ArrowUpButton,Shop,OutstandingOffer,FollowUs,SubscribeToNews,Footer],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class shop {}