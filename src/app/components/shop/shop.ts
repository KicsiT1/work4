import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faAngleUp,faAngleDown} from '@fortawesome/free-solid-svg-icons';
import { ProductFilter } from './product-filter/product-filter';
import { ProductLayoutSwitcher } from './product-layout-switcher/product-layout-switcher';
import { ProductContent } from './product-content/product-content';
import { Pagination } from './pagination/pagination';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-Shop',
  imports: [FontAwesomeModule,ProductFilter,ProductLayoutSwitcher,ProductContent,Pagination],
  templateUrl: './shop.html',
  styleUrl: './shop.scss',
})

export class Shop {
  filteredData: ProductModel[] = [];
  
  onFilterApplied(products: ProductModel[]): void {
    this.filteredData = products;    
    console.log('A szülő megkapta az adatot:', this.filteredData);
  }

  faAngleUp:IconDefinition=faAngleUp;
  faAngleDown:IconDefinition=faAngleDown;


}
