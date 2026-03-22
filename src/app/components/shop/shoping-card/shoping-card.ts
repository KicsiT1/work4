import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ShoppingCard } from '../../../services/shopping-card';
@Component({
  selector: 'app-shoping-card',
  imports: [FontAwesomeModule],
  templateUrl: './shoping-card.html',
  styleUrl: './shoping-card.scss',
})
export class ShopingCard {
  faX: IconDefinition = faX;
  ShoppingCardActive:boolean=true;

  constructor(public cartService: ShoppingCard) {}

  onRemove(pid: number) 
  {
    this.cartService.removeProductItem(pid);
  }
  
  ChangeActive()
  {
    this.ShoppingCardActive=!this.ShoppingCardActive;
  }
}
