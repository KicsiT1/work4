import { Injectable , inject } from '@angular/core';
import { User } from '../models/User.model';
import { UserService } from './User-service';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  Users: User[] = [];
  protected UserService = inject(UserService);
 
  protected isAuthenticated: boolean = false;

  login(UserEmail: string, UserPassword: string) 
  {
    return this.UserService.GetUsersData().pipe(
    map(users => {
      const user = users.find(u =>
        u.EmailAdress === UserEmail &&
        u.Password === UserPassword
      );

      this.isAuthenticated = !!user;
      return user;
    })
  );
}
  // This function is used to log out the user.
  logout() 
  {
    this.isAuthenticated = false;
    console.log("User logged out");
  }
  // This function is used to check if the user is authenticated or not.
  get Authenticated(): boolean {return this.isAuthenticated;}

}
