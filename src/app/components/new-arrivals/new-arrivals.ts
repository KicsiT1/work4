import { Component } from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
// This makes it safe to use icons (special type for icons)
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
// The different icons I use for the menu
import {faStar} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-new-arrivals',
  imports: [FontAwesomeModule],
  templateUrl: './new-arrivals.html',
  styleUrl: './new-arrivals.scss',
})
export class NewArrivals {
  faStar:IconDefinition=faStar;
}
