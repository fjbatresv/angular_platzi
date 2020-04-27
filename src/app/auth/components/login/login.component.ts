import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const values = this.form.value;
      this.authService.login(values.email, values.password).then(() => {
        this.router.navigate(['/admin']);
      }).catch(() => {
        alert('No es un usuario valido');
      });
    }
  }

  loginRest() {
    this.authService.loginRestApi('nicolas@nicola.com', '123456')
    .subscribe(data => {
      console.log('loginRest', data);
    });
  }

  get emailField() {
    return this.form.get('email');
  }

  get passwordField() {
    return this.form.get('password');
  }

}
