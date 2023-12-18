import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'
@Component({
  selector: 'netquest-search',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatIconModule,FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
 @ViewChild('searchForm') form :NgForm;
  searchStr:string='';
  selectedCategory:string='';
  public categories: string[] = ['All Categories','Clothes','Toys','Kitchen utensils','Shoes','Books','Lights','Cosmetics','Groceries','Garden & Outdoor','Baby Products','Luggage & bags','Home decor','Camera & Accessories','Electronics','Phones']
  constructor(private router: Router) {}
  
  ngOnInit(): void {
    this.searchStr=''; 
    this.selectedCategory=this.categories[0];   
  }

  SearchProduct() : void{
    //console.log(this.form.value.txtSearch);
    console.log(this.selectedCategory);
    this.router.navigate(['/search-product'],{queryParams: {search: this.form.value.txtSearch}});

  }
}
