import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'netquest-search-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-product.component.html',
  styleUrl: './search-product.component.scss',
})
export class SearchProductComponent implements OnInit {

public search:string='';

constructor(private route: ActivatedRoute, private productService: ProductServiceService) {}

ngOnInit(): void {
    this.route
        .queryParams
        .subscribe(params => {
            this.search = params['search'];
            console.log('search:'+this.search);
        });

        this.productService.getSearchResult(this.search).subscribe(result=>{
          console.log(result);
        })
}

}
