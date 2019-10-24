import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Router } from '@angular/router';
import { MyValidators } from 'src/app/utils/validator';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;
  image$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private afStorage: AngularFireStorage) {
    this.buildForm();
  }

  ngOnInit() {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: [0, [Validators.required, MyValidators.isPriceValid]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
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

  uploadFile(event) {
    const file = event.target.files[0];
    const dir = `images/${file.name}`;
    const fileRef = this.afStorage.ref(dir);
    const task = this.afStorage.upload(dir, file);
    task.snapshotChanges()
    .pipe(
      finalize(
        () => {
          this.image$ = fileRef.getDownloadURL();
          this.image$.subscribe(url => this.imageField.setValue(url));
        }
      )
    ).subscribe();
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

  get imageField() {
    return this.form.get('image');
  }

}
