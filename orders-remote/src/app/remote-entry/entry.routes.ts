import { Route } from '@angular/router';
import { OrdersComponent } from '@netquest/modules/orders';

export const remoteRoutes: Route[] = [
 { 
  path: '', 
  component: OrdersComponent,
  pathMatch:'full'
 },
];
