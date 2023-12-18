import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
@Component({
  selector: 'netquest-header',
  standalone: true,
  imports: [CommonModule,SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
