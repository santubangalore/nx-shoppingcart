import { Route } from '@angular/router';
import {LoginComponent} from '@netquest/auth';
import {AuthComponent} from '@netquest/auth';

export const remoteRoutes: Route[] = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: AuthComponent },
];
