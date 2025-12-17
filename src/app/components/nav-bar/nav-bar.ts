import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faUser,faMagnifyingGlass,faStar,faBagShopping,faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  imports: [FontAwesomeModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  // Font Awesome icons
  faUser = faUser;
  faMagnifyingGlass = faMagnifyingGlass;
  faStar = faStar;
  faBagShopping = faBagShopping;
  faBars = faBars;
}
