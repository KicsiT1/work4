import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { User } from '../models/User.model';
@Injectable({
  providedIn: 'root',
})
export class UserService 
{
  private UsersDataUrl:string = '/public/assets/Users.json';

  constructor(private http: HttpClient) {}
  
  GetUsersData(): Observable<User[]>
  {
    return this.http.get<User[]>(this.UsersDataUrl);
  }
}