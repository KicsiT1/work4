import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faUser,faMagnifyingGlass,faStar,faBagShopping,faBars,faXmark} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  imports: [FontAwesomeModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {
  // Font Awesome icons
  faUser = faUser;
  faMagnifyingGlass = faMagnifyingGlass;
  faStar = faStar;
  faBagShopping = faBagShopping;
  faBars = faBars;
  faXmark = faXmark;

  MenuOpen:boolean=false;

  IconChange()
  {
    this.MenuOpen=!this.MenuOpen;
  }
}
