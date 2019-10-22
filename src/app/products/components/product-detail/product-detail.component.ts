import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  product: Product;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log('ID', params.id);
      const id = params.id;
      this.product = this.productService.getProduct(id);
      console.log('Product', this.product);
    });
  }

}
