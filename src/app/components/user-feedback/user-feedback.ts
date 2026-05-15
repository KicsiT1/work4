import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faStar,faAngleLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserService } from '../../services/User-service';
import { User } from '../../models/User.model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-user-feedback',
  imports: [FontAwesomeModule, AsyncPipe],
  templateUrl: './user-feedback.html',
  styleUrl: './user-feedback.scss',
})
export class UserFeedback {
  // icons
  faStar:IconDefinition=faStar;
  faAngleLeft:IconDefinition=faAngleLeft;
  faAngleRight:IconDefinition=faAngleRight;
  users$!: Observable<User[]>;
  constructor(private userService:UserService) {}
  ngOnInit()
  {
      this.users$ = this.userService.GetUsersData();
  }
  protected activeIndex: number = 1;
  protected totalItems: number = 3;
  
  // Responsible for swiping the card right
  next(): void {
    if (this.activeIndex < this.totalItems - 1) 
    {
      this.activeIndex++;
    } 
    else 
    {
      this.activeIndex = 0;
    }
  }
  // Responsible for swiping the card to the left
  prev(): void {
    if (this.activeIndex > 0) 
    {
      this.activeIndex--;
    } 
    else 
    {
      this.activeIndex = this.totalItems - 1;
    }
  }
}
