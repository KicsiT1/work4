import { Routes } from '@angular/router';
import { Home } from './WebRouteLayouts/home/home';
import { shop } from './WebRouteLayouts/shop/shop';
import { productinfo } from './WebRouteLayouts/productinfo/productinfo';
export const routes: Routes = 
[
    { path: '', component: Home },
    { path: 'shop', component:  shop },
    { path: 'shop/productinfo', component: productinfo },
];
