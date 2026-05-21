import {Component,inject} from '@angular/core';
// Module that allows the use of *ngif,*ngFor in html (no need)
import {CommonModule} from '@angular/common';
// Font Awesome module need for the icons
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
// This makes it safe to use icons (special type for icons)
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
// The different icons I use for the menu
import {faBasketShopping,faAngleDown,faArrowRightFromBracket,faUser,faMagnifyingGlass,faStar,faBagShopping,faBars,faXmark, faL} from '@fortawesome/free-solid-svg-icons';
import {ShopingCard } from '../shop/shoping-card/shoping-card';
import { ShoppingCard } from '../../services/shopping-card';
@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule, FontAwesomeModule, ShopingCard],
  standalone: true,
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {
  protected ShoppingcardService = inject(ShoppingCard);
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
  isMenuOpen: boolean = false;
  // This variable helps to change the content in the menu after a possible login.
  IsLoggedIn:boolean = false;
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
  // I make the shopping card openable with this function.
  OpenShoppingCard()
  {
    this.ShoppingCard=!this.ShoppingCard;
    console.log(this.ShoppingCard)
  }

  toggleMenu() 
  {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) 
    {
    document.body.style.overflow = 'hidden';
    } 
    else 
    {
      document.body.style.overflow = '';
    }
}
}
