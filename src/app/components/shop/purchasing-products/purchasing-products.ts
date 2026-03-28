import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faLock} from '@fortawesome/free-solid-svg-icons';
import { ShoppingCard } from '../../../services/shopping-card';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-purchasing-products',
  standalone: true,
  imports: [FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './purchasing-products.html',
  styleUrl: './purchasing-products.scss',
})
export class PurchasingProducts {
  faLock:IconDefinition=faLock;
  ContactForm!: FormGroup;
  Payment!:FormGroup;
  constructor(public ShoppingCard:ShoppingCard, private fb: FormBuilder)
  {
    
    this.ContactForm = this.fb.group
    ({
      country:    ['', Validators.required],
      email:      ['',[Validators.email]],
      FirstName:  ['',[Validators.minLength(3),Validators.maxLength(40)]],
      LastName:   ['',[Validators.minLength(3),Validators.maxLength(40),Validators.pattern('^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ]+$')]],
      Address:    ['',[Validators.maxLength(60),Validators.required]],
      City:       ['',[Validators.maxLength(60),Validators.required]],
      PostalCode: ['',[Validators.minLength(6),Validators.maxLength(20), Validators.pattern('^[0-9]+$'),Validators.required]],
    });

    this.Payment=this.fb.group
    ({
        Payment:['',[Validators.required]],
        CardNumber:['',[Validators.required,Validators.maxLength(16)]],
        ExpirationDate:['',[Validators.required,Validators.pattern('^(0[1-9]|1[0-2])\\/([0-9]{4})$')]],
        SecurityCode:['',[Validators.required,Validators.maxLength(3)]],
        CardHolderName:['',[Validators.required,Validators.min(15),Validators.max(60)]]
    });
    
  }
  protected ShippingPrice:number=40;
}
