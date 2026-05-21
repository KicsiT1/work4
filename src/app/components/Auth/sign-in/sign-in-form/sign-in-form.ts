import { Component, Output , EventEmitter,inject} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import{ faGoogle } from '@fortawesome/free-brands-svg-icons';
import{ faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'login-form',
  imports: [ReactiveFormsModule,FontAwesomeModule],
  templateUrl: './Sign-in-form.html',
  styleUrl: './Sign-in-form.scss',
})
export class SigninForm {
  faGoogle:IconDefinition = faGoogle;
  faEnvelope:IconDefinition = faEnvelope;
  Login!:FormGroup;
  protected fb:FormBuilder=inject(FormBuilder);
  constructor()
  {
    this.Login=this.fb.group
    ({
      Email:['',[Validators.email,Validators.required]],
      Password:['',[Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]],
    });
  }

  IsOpen:boolean=true;

  @Output() OpenForgetPassPanel = new EventEmitter<boolean>();

  emitEvent() 
  { 
    this.IsOpen=!this.IsOpen;
    this.OpenForgetPassPanel.emit(this.IsOpen);
  }
  
}
