import { Pipe, PipeTransform } from '@angular/core';
import { ProductModel } from '../models/product.model';
@Pipe({
  name: 'filterData',
})
export class FilterDataPipe implements PipeTransform {

transform(DataList: ProductModel[], category: string = 'all', onlyAccessories: boolean | null = null): ProductModel[] {
  
    if (!DataList) return [];

    return DataList.filter((product) => {
    
      const matchesCategory = (category === 'all') || (product.ProductFor === category);

      const matchesAcc = (onlyAccessories === null) || (product.Accessories === onlyAccessories);

      return matchesCategory && matchesAcc;
    });
  }
}
