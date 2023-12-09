import { Route } from '@angular/router';
import { CheckoutComponent } from '@netquest/modules/checkout';

export const remoteRoutes: Route[] = [
  { 
    path: '',
    component: CheckoutComponent,
    pathMatch:'full'
  },
];
