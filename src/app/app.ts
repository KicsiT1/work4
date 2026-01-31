import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './components/nav-bar/nav-bar';
import { HeroSection } from './components/hero-section/hero-section';
import { CurrentOffer } from './components/current-offer/current-offer';
import { NewArrivals } from'./components/new-arrivals/new-arrivals'
import { OutstandingOffer } from './components/outstanding-offer/outstanding-offer';
import { FollowUs } from './components/follow-us/follow-us';
import { UserFeedback } from './components/user-feedback/user-feedback';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavBar,HeroSection,CurrentOffer,NewArrivals,OutstandingOffer,FollowUs,UserFeedback],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
