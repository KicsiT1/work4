import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faStar,faAngleLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-user-feedback',
  imports: [FontAwesomeModule],
  templateUrl: './user-feedback.html',
  styleUrl: './user-feedback.scss',
})
export class UserFeedback {
  // icons
  faStar:IconDefinition=faStar;
  faAngleLeft:IconDefinition=faAngleLeft;
  faAngleRight:IconDefinition=faAngleRight;
}
