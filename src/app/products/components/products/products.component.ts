import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  products: Product[] = [];

  ngOnInit() {
    this.fetchProducts();
  }

  clickProduct(id: number) {
    console.log(id);
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe(products => {
      console.log('Products Raw', products);
      this.products = products;
    });
  }

}
