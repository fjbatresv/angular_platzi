import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsContainer } from './containers/products/products.container';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
    declarations: [
        ProductsContainer,
        ProductComponent,
        ProductDetailComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        SharedModule,
        MaterialModule
    ],
})
export class ProductsModule { }
