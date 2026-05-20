import { Component, Input, Output,EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';
import { COLLECTION } from '../../../models/product.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-layout-switcher',
  imports: [FontAwesomeModule,FormsModule],
  templateUrl: './product-layout-switcher.html',
  styleUrl: './product-layout-switcher.scss',
})

export class ProductLayoutSwitcher {

  @Input() ProdCollectionIndex:number=-1;
  protected ProdCollection:COLLECTION[]=Object.values(COLLECTION);
  faAngleDown:IconDefinition=faAngleDown;
  SearchInputData:string='';
}
