import { Route } from '@angular/router';
import { SearchProductComponent } from '@netquest/modules/products';

export const remoteRoutes: Route[] = [
  {
    path: '', 
    component: SearchProductComponent, 
    pathMatch:'full'
  },
];
