import { Component, Output , EventEmitter,inject} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import{ faGoogle } from '@fortawesome/free-brands-svg-icons';
import{ faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../../services/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'login-form',
  imports: [ReactiveFormsModule,FontAwesomeModule],
  templateUrl: './sign-in-form.html',
  styleUrl: './sign-in-form.scss',
})
export class SigninForm {
  faGoogle:IconDefinition = faGoogle;
  faEnvelope:IconDefinition = faEnvelope;
  Login!:FormGroup;
  protected fb:FormBuilder=inject(FormBuilder);
  protected authService: AuthService = inject(AuthService);
  protected router = inject(Router);
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
  protected EmailAddress!:string;
  protected Password!:string;

  LoginUser()
  {
    this.EmailAddress=this.Login.get('Email')?.value;
    this.Password=this.Login.get('Password')?.value;
    this.authService.login(this.EmailAddress, this.Password).subscribe(user => 
    {
    if (user) 
    {
      console.log("Logged in");
      this.router.navigate(['/']);
    } 
    else 
    {
      console.log("Invalid login");
    }
  });
  }

  RegisterUser()
  {
    this.router.navigate(['signup']);
  }

}
