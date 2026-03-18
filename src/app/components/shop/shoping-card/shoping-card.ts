import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-shoping-card',
  imports: [FontAwesomeModule],
  templateUrl: './shoping-card.html',
  styleUrl: './shoping-card.scss',
})
export class ShopingCard {
  faX: IconDefinition = faX;
  ShoppingCardActive:boolean=true;
  ChangeActive()
  {
    this.ShoppingCardActive=!this.ShoppingCardActive;
  }
}
