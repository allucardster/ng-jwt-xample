import { Component, OnInit } from '@angular/core';

import { ProductRepositoryService } from './product-repository.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  error: string = '';

  constructor(private productRepository: ProductRepositoryService) { }

  ngOnInit() {
    this.productRepository
      .getList()
      .subscribe(
          data => this.products = data,
          error => {
            console.log(error)
            this.error = error.message
          }
      );
  }

}
