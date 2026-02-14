import { Component } from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
// This makes it safe to use icons (special type for icons)
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// The different icons I use for the hero right side
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-shop-button',
  imports: [RouterModule,FontAwesomeModule],
  templateUrl: './shop-button.html',
  styleUrl: './shop-button.scss',
})
export class ShopButton {
  faCartShopping:IconDefinition = faCartShopping;
}
