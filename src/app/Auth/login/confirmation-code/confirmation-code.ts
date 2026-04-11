import { Component } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'confirmation-code',
  imports: [ReactiveFormsModule],
  templateUrl: './confirmation-code.html',
  styleUrl: './confirmation-code.scss',
})
export class ConfirmationCode {
  ConfirmationCode!:FormGroup;
  constructor(private fb:FormBuilder)
  {
     this.ConfirmationCode=this.fb.group
    ({
      ConfirmationCode:['',[Validators.required,Validators.pattern("^[0-9]{8}$")],Validators.maxLength(8)]
    });
  }
}
