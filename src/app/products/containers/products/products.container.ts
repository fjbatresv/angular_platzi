import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class ProductsContainer implements OnInit {

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
