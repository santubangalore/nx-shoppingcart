import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SearchComponent } from './search/search.component';
import {HeaderComponent} from './header/header.component';
import {MatIconModule} from '@angular/material/icon';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent,SearchComponent, HeaderComponent, MatIconModule,RouterModule],
  selector: 'netquest-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shoppingcart';
}
