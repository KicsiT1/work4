// It can filter on all properties of the ProductModel[] array if needed. (Universal filtering)
import { Pipe, PipeTransform } from '@angular/core';
import { ProductModel } from '../models/product.model';
@Pipe({
  name: 'filterData',
})
export class FilterDataPipe implements PipeTransform {

transform(DataList: ProductModel[], filters: { [key: string]: any}): ProductModel[] {
  
    if (!DataList || !filters) return [];

    return DataList.filter((product) => {
    
    return Object.entries(filters).every(([key, value]) => {
      
      if (value === null || value === undefined) return true;
      
      return product[key as keyof ProductModel] === value;
    });
  });
  }
}
