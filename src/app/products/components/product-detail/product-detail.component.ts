import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { ProductsService } from "@core/services/products/products.service";
import { Product } from "src/app/product.model";
import { switchMap } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"],
})
export class ProductDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  product$: Observable<Product> = null;

  ngOnInit() {
    this.product$ = this.route.params.pipe(
      switchMap((params: Params) => {
        return this.productService.getProduct(params.id);
      })
    );
  }

  createProduct() {
    const newProduct: Product = {
      id: "10000",
      title: "Nuevo de Angular",
      image: "assets/images/banner-1.jpg",
      price: 3000,
      description: "Nuevo producto desde Angular",
    };
    this.productService.createProduct(newProduct).subscribe((product) => {
      console.log("Product created:", product);
    });
  }

  editProduct() {
    const changes: Partial<Product> = {
      title: "Nuevo de Angular editado",
      description: "Nuevo producto desde Angular editado usando TS",
    };
    this.productService.editProduct("10000", changes).subscribe((product) => {
      console.log("Product created:", product);
    });
  }

  deleteProduct() {
    this.productService.deleteProduct("10000").subscribe((res) => {
      console.log("deleted", res);
    });
  }

  getRandomUsers() {
    this.productService.getRandomUsers().subscribe(
      (users) => {
        //All ok
        console.log(users);
      },
      (error) => {//Error
        console.error(error);
      }
    );
  }

}
