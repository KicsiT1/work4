import { Component } from '@angular/core';
import { LoginForm } from './login-form/login-form';
import { ForgetPassworldForm } from './forget-passworld-form/forget-passworld-form';
import { ConfirmationCode } from './confirmation-code/confirmation-code';
import { ConfirmationPassworld } from './confirmation-passworld/confirmation-passworld';
@Component({
  selector: 'app-login',
  imports: [LoginForm, ForgetPassworldForm,ConfirmationCode, ConfirmationPassworld],
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
