import { Component,Input} from '@angular/core';
import { ProductModel } from '../../../models/product.model';
@Component({
  selector: 'app-product-content',
  imports: [],
  standalone: true,
  templateUrl: './product-content.html',
  styleUrl: './product-content.scss',
})
export class ProductContent {
  @Input() products: ProductModel[] = [];
}
