// This is the MonthlySalesModel I call within the current-offer component.
// This model helps you assign discounted products to months.
// Monthly Sales Model is managed by Product Service.
import { ProductModel } from "./product.model";
export interface MonthlySalesModel
{
  Month:Months;
  SaleProducts:[ProductModel,ProductModel,ProductModel];
}

enum Months {
  January = "January",
  February = "February",
  March = "March",
  April = "April",
  May = "May",
  June = "June",
  July = "July",
  August = "August",
  September = "September",
  October = "October",
  November = "November",
  December = "December"
}