import { Component , Output , EventEmitter, inject } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'forget-passworld-form',
  imports: [ReactiveFormsModule],
  templateUrl: './forget-passworld-form.html',
  styleUrl: './forget-passworld-form.scss',
})
export class ForgetPassworldForm {
  ForgetPassword!:FormGroup;
  protected fb:FormBuilder=inject(FormBuilder);
  constructor()
  {
    this.ForgetPassword=this.fb.group
    ({
      FirstName:      ['',[Validators.maxLength(100)]],
      LastName:       ['',[Validators.maxLength(100)]],
      Email:          ['',[Validators.email,Validators.required],Validators.maxLength(200)],
      PhoneNumber:    ['',[Validators.required,Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')]]
    });
  }

  IsOpen:boolean=true;

  @Output() OpenLoginPanel = new EventEmitter<boolean>();

  emitEvent() 
  { 
    this.IsOpen=!this.IsOpen;
    this.OpenLoginPanel.emit(this.IsOpen);
  }
}
