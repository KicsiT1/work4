import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faLock} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-purchasing-products',
  imports: [FontAwesomeModule],
  templateUrl: './purchasing-products.html',
  styleUrl: './purchasing-products.scss',
})
export class PurchasingProducts {
  faLock:IconDefinition=faLock;
}
