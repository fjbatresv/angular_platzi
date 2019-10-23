import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Router } from '@angular/router';
import { MyValidators } from 'src/app/utils/validator';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private productsService: ProductsService, private router: Router) {
    this.buildForm();
  }

  ngOnInit() {
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
      this.productsService.createProduct(this.form.value).subscribe(created => {
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
