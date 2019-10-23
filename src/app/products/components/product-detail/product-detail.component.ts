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

  product: Product = null;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log('ID', params.id);
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productService.getProduct(id).subscribe(product => {
      this.product = product;
      console.log('Product', this.product);
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '10000',
      title: 'Nuevo de Angular',
      image: 'assets/images/banner-1.jpg',
      price: 3000,
      description: 'Nuevo producto desde Angular'
    };
    this.productService.createProduct(newProduct).subscribe(product => {
      console.log('Product created:', product);
    });
  }

  editProduct() {
    const changes: Partial<Product> = {
      title: 'Nuevo de Angular editado',
      description: 'Nuevo producto desde Angular editado usando TS'
    };
    this.productService.editProduct('10000', changes).subscribe(product => {
      console.log('Product created:', product);
    });
  }

  deleteProduct() {
    this.productService.deleteProduct('10000').subscribe(res => {
      console.log('deleted', res);
    });
  }

}
