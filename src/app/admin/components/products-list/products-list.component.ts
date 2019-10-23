import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/product.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  displayColumns: string[] = ['id', 'title', 'price', 'actions'];
  datasource = new MatTableDataSource(this.products);

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.fetchProduct();
  }

  applyFilter(filterValue: string) {
    this.datasource.filter = filterValue.trim().toLowerCase();
  }

  fetchProduct() {
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products;
      this.datasource = new MatTableDataSource(this.products);
    });
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id).subscribe(res => {
      if (res) {
        this.fetchProduct();
      }
    });
  }

}
