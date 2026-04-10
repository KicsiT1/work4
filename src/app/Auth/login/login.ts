import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import{ faGoogle } from '@fortawesome/free-brands-svg-icons';
import{ faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { FloatingBox } from '../../components/floating-box/floating-box';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FontAwesomeModule,FloatingBox,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})

export class Login {
  faGoogle:IconDefinition = faGoogle;
  faEnvelope:IconDefinition = faEnvelope;
  Login!:FormGroup;
  constructor(private fb:FormBuilder)
  {
    this.Login=this.fb.group
    ({
      Email:['',[Validators.email,Validators.required]],
      Password:['',[Validators.required,  Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]],
    });
  }
}
