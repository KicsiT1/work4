//This Service use other components  1.current-offer and 2.new-arrivals
import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { MonthlySalesModel } from '../models/MonthlySales.model';
import { ProductModel } from '../models/product.model';
@Injectable({
  providedIn: 'root',
})
export class ProductService {

  // The data is in separate files, I decided to split it up for myself so it would be more transparent.
  private MonthlySalesDataUrl:string = 'assets/MonthlySalesData.json';
  private ProductDataUrl:string = 'assets/Products.json';
  protected http = inject(HttpClient);
  // Provides data to the current-offer component
  GetMonthlySalesData(): Observable<MonthlySalesModel[]> 
  {
    return this.http.get<MonthlySalesModel[]>(this.MonthlySalesDataUrl);
  }
  // This in turn provides data to the New-arrivals component.
  GetNewArrivalsData(): Observable<ProductModel[]>
  {
    return this.http.get<ProductModel[]>(this.ProductDataUrl);
  }
}
