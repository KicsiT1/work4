import { Component } from '@angular/core';
import { LoginForm } from './login-form/login-form';
import { ForgetPassworldForm } from './forget-passworld-form/forget-passworld-form';
@Component({
  selector: 'app-login',
  imports: [LoginForm, ForgetPassworldForm],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})

export class Login {
  isForgetOpen:boolean = false;
  
  handleForgetPassPanel(isOpen: boolean) 
  {
    this.isForgetOpen = isOpen;
  }

  handleLoginPanel(isOpen: boolean) 
  {
    this.isForgetOpen = isOpen;
  }
}
