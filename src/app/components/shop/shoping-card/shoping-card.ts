import { Component,inject} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ShoppingCard } from '../../../services/shopping-card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoping-card',
  imports: [FontAwesomeModule],
  templateUrl: './shoping-card.html',
  styleUrl: './shoping-card.scss',
})
export class ShopingCard {
  faX: IconDefinition = faX;
  ShoppingCardActive:boolean=true;
  
  protected cartService = inject(ShoppingCard);
  protected router = inject(Router);

  // Helper function removes the product from the cart
  onRemove(pid: number) 
  {
    this.cartService.removeProductItem(pid);
  }
  // Close the shopping card
  ChangeActive()
  {
    this.ShoppingCardActive=!this.ShoppingCardActive;
  }
  // If there is a single digit in the quantity, there should be a 0 on the left.
  pad(n: number): string 
  {
    return n.toString().padStart(2, '0');
  }
  GoToCheckout()
  {
    this.router.navigate(['Purchasing-product']);
  }
}
