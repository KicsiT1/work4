import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {faAngleDown,faArrowRightFromBracket,faUser,faMagnifyingGlass,faStar,faBagShopping,faBars,faXmark, faL} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule,FontAwesomeModule],
  standalone: true,
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
  faArrowRightFromBracket=faArrowRightFromBracket;
  faAngleDown=faAngleDown;

  MenuOpen:boolean=false;
  IsLoggedIn:boolean=false;

  IconChange()
  {
    this.MenuOpen=!this.MenuOpen;
  }

  loggedOutMenu:{link:string,text:string}[]=
  [
    {link:"#Home",text:'Home'},
    {link:"#Deals",text:'Deals'},
    {link:"#NewArrivals",text:'New Arrivals'},
    {link:"#Packages",text:'Packages'}
  ];

  LoggedInMenu:{link:string,text:string,icon:IconDefinition|null}[]=
  [
    {link:"#Home",text:'Home',icon:null},
    {link:"#shop",text:'Shop',icon:null},
    {link:"#Products",text:'Products',icon:null},
    {link:"#Pages",text:'Pages',icon:faAngleDown}
  ];
}
