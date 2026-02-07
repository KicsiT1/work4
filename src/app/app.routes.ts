import { Routes } from '@angular/router';
import { Home } from './WebRouteLayouts/home/home';
import { shop } from './WebRouteLayouts/shop/shop';
export const routes: Routes = 
[
    { path: '', component: Home },
    { path: 'shop', component:  shop },
];
