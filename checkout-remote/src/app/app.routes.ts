import { Route } from '@angular/router';
import { CheckoutComponent } from '@netquest/modules/checkout';

export const appRoutes: Route[] = [
  {
    path: '',
    component:CheckoutComponent,
    pathMatch:'full'
    // loadChildren: () =>
    //   import('@netquest/modules/checkout').then((m) => m.CheckoutComponent), 
  },
];
