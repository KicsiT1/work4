import { Routes } from '@angular/router';
import { Home } from './WebRouteLayouts/home/home';
import { shop } from './WebRouteLayouts/shop/shop';
import { productinfo } from './WebRouteLayouts/productinfo/productinfo';
import { Purchasingproducts } from './WebRouteLayouts/purchasingproducts/purchasingproducts';

export const routes: Routes = 
[
    { path: '', component: Home },
    { path: 'shop', component:  shop },
    { path: 'shop/productinfo/:id', component: productinfo },
    { path: 'Purchasing-product', component: Purchasingproducts },
];
