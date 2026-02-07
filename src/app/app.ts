import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './WebRouteLayouts/home/home';
import { shop } from './WebRouteLayouts/shop/shop';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Home,
    shop],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
