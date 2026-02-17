import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faAngleUp,faAngleDown} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-Shop',
  imports: [FontAwesomeModule],
  templateUrl: './shop.html',
  styleUrl: './shop.scss',
})
export class Shop {
    faAngleUp:IconDefinition=faAngleUp;
    faAngleDown:IconDefinition=faAngleDown;
}
