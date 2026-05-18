import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import{ faGoogle } from '@fortawesome/free-brands-svg-icons';
import{ faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule,FontAwesomeModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss',
})
export class SignUp {
  
    faGoogle:IconDefinition = faGoogle;
    faEnvelope:IconDefinition = faEnvelope;
    SignUp!:FormGroup;
    constructor(private fb:FormBuilder)
  {
    
    this.SignUp=this.fb.group
    ({
      FirstName:        ['',[Validators.maxLength(60)]],
      LastName:         ['',[Validators.maxLength(60)]],
      EmailAddress:     ['',[Validators.email,Validators.required,Validators.maxLength(200)]],
      PhoneNumber:      ['',[Validators.required,Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')]],
      Password:         ['',[Validators.minLength(8),Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]],
      ConfirmPassword:  ['',[Validators.minLength(8),Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]]
    },
    {
      validators: this.passwordMatchValidator
    }
    );}

    passwordMatchValidator(form: FormGroup) 
    {
      const pass = form.get('Password')?.value;
      const confirm = form.get('ConfirmPassword')?.value;

      return pass === confirm ? null : { passwordMismatch: true };
    }
}
