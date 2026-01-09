import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './components/nav-bar/nav-bar';
import { HeroSection } from './components/hero-section/hero-section';
import { CurrentOffer } from './components/current-offer/current-offer';
import{ NewArrivals } from'./components/new-arrivals/new-arrivals'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavBar,HeroSection,CurrentOffer,NewArrivals],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
