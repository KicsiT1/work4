import {Component} from '@angular/core';
// Module that allows the use of *ngif,*ngFor in html (no need)
import {CommonModule} from '@angular/common';
// Font Awesome module need for the icons
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
// This makes it safe to use icons (special type for icons)
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
// The different icons I use for the menu
import {faBasketShopping,faAngleDown,faArrowRightFromBracket,faUser,faMagnifyingGlass,faStar,faBagShopping,faBars,faXmark, faL} from '@fortawesome/free-solid-svg-icons';
import { ShopingCard } from '../shop/shoping-card/shoping-card';
@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule,FontAwesomeModule,ShopingCard],
  standalone: true,
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {
  // Font Awesome icons
  faUser:IconDefinition = faUser;
  faMagnifyingGlass:IconDefinition = faMagnifyingGlass;
  faStar:IconDefinition = faStar;
  faBagShopping:IconDefinition = faBagShopping;
  faBars:IconDefinition = faBars;
  faXmark:IconDefinition = faXmark;
  faArrowRightFromBracket:IconDefinition = faArrowRightFromBracket;
  faAngleDown:IconDefinition = faAngleDown;
  faBasketShopping:IconDefinition = faBasketShopping;
  // This variable helps to open the phone menu
  MenuOpen:boolean = false;
  // This variable helps to change the content in the menu after a possible login.
  IsLoggedIn:boolean = false;
  //This function reverses the value of the MenuOpen variable
  IconChange()
  {
    this.MenuOpen =! this.MenuOpen;
  }
  // This array contains the data that is displayed when the user is not yet logged in.
  loggedOutMenu:{link:string, text:string}[]=
  [
    {link:"#Home", text:'Home'},
    {link:"#Deals", text:'Deals'},
    {link:"#NewArrivals", text:'New Arrivals'},
    {link:"#Packages", text:'Packages'}
  ];
  // This array contains the data that is displayed after logging in.
  LoggedInMenu:{link:string, text:string, icon:IconDefinition|null}[]=
  [
    {link:"#Home", text:'Home', icon:null},
    {link:"#shop", text:'Shop', icon:null},
    {link:"#Products", text:'Products', icon:null},
    {link:"#Pages", text:'Pages', icon:faAngleDown}
  ];

  ShoppingCard:boolean=false;
  OpenShoppingCard()
  {
    this.ShoppingCard=!this.ShoppingCard;
  }
}
