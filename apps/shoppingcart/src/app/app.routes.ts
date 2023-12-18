import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'cart',
    loadChildren: () =>
      import('cart-remote/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('orders-remote/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'search-product',
    loadChildren: () =>
      import('search-product-remote/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('checkout-remote/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('auth-remote/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
