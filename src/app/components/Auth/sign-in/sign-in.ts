import { Component } from '@angular/core';
import { ForgetPassworldForm } from './forget-passworld-form/forget-passworld-form';
import { ConfirmationCode } from './confirmation-code/confirmation-code';
import { ConfirmationPassworld } from './confirmation-passworld/confirmation-passworld';
import { SigninForm } from './sign-in-form/sign-in-form';

@Component({
  selector: 'app-login',
  imports: [SigninForm, ForgetPassworldForm,/*ConfirmationCode, ConfirmationPassworld*/],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss',
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
