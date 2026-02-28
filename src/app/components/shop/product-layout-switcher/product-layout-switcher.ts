import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-product-layout-switcher',
  imports: [FontAwesomeModule],
  templateUrl: './product-layout-switcher.html',
  styleUrl: './product-layout-switcher.scss',
})
export class ProductLayoutSwitcher {

  faAngleDown:IconDefinition=faAngleDown;

}
