import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MyValidators } from 'src/app/utils/validator';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  private id: string;

  constructor(private formBuilder: FormBuilder, private productsService: ProductsService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.buildForm();
  }

  ngOnInit() {
    this.loadParams();
  }

  private loadParams() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.fetchProduct(this.id);
    });
  }

  private fetchProduct(id: string) {
    this.productsService.getProduct(id).subscribe(product => {
      this.setForm(product);
    });
  }

  private setForm(product: Product) {
    this.form.patchValue({
      id: product.id,
      title: product.title,
      image: product.image,
      description: product.description,
      price: product.price,
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: [0, [Validators.required, MyValidators.isPriceValid]],
      image: ['', []],
      description: ['', [Validators.required]]
    });
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      console.log('form', this.form.value);
      this.productsService.editProduct(this.id, this.form.value).subscribe(created => {
        console.log('Created', created);
        this.router.navigate(['./admin/products']);
      });
    }
  }

  get idField() {
    return this.form.get('id');
  }

  get titleField() {
    return this.form.get('title');
  }
  get descField() {
    return this.form.get('description');
  }
  get priceField() {
    return this.form.get('price');
  }

}
