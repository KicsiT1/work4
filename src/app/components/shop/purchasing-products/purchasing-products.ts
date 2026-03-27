import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faLock} from '@fortawesome/free-solid-svg-icons';
import { ShoppingCard } from '../../../services/shopping-card';


@Component({
  selector: 'app-purchasing-products',
  imports: [FontAwesomeModule],
  templateUrl: './purchasing-products.html',
  styleUrl: './purchasing-products.scss',
})
export class PurchasingProducts {
  faLock:IconDefinition=faLock;
  constructor(public ShoppingCard:ShoppingCard){}
  protected ShippingPrice:number=40;
}
