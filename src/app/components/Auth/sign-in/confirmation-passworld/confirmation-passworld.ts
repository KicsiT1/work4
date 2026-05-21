import { Component , inject } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'confirmation-passworld',
  imports: [ReactiveFormsModule],
  templateUrl: './confirmation-passworld.html',
  styleUrl: './confirmation-passworld.scss',
})
export class ConfirmationPassworld {

  ConfirmationPassworldForm!:FormGroup;
  protected fb:FormBuilder=inject(FormBuilder);
  constructor()
  {
    this.ConfirmationPassworldForm=this.fb.group
    (
    {
      NewPassword:              ['',[Validators.minLength(8),Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]],
      ConfirmationPassword:     ['',[Validators.minLength(8),Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]]
    },
    {
       validators: this.passwordMatchValidator
    }
  );
  }
  
  passwordMatchValidator(form: FormGroup) 
  {
    const pass = form.get('NewPassword')?.value;
    const confirm = form.get('ConfirmationPassword')?.value;

    return pass === confirm ? null : { passwordMismatch: true };
  }

}
