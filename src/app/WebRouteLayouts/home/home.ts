import { Component } from '@angular/core';
import { NavBar } from '../../components/nav-bar/nav-bar';
import { HeroSection } from '../../components/hero-section/hero-section';
import { CurrentOffer } from '../../components/current-offer/current-offer';
import { NewArrivals } from '../../components/new-arrivals/new-arrivals';
import { OutstandingOffer } from '../../components/outstanding-offer/outstanding-offer';
import { FollowUs } from '../../components/follow-us/follow-us'; 
import { UserFeedback } from '../../components/user-feedback/user-feedback';
import { SubscribeToNews } from '../../components/subscribe-to-news/subscribe-to-news';
import { Footer } from '../../components/footer/footer'; 
@Component({
  selector: 'app-home',
  imports: [
    NavBar,
    HeroSection,
    CurrentOffer,
    NewArrivals,
    OutstandingOffer,
    FollowUs,
    UserFeedback,
    SubscribeToNews,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
