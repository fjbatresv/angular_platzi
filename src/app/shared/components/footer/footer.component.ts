import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailField: FormControl;

  constructor() {
    this.emailField = new FormControl('', [
      Validators.email,
      Validators.required]);
  }

  ngOnInit() {
  }

  sendMail() {
    if (this.emailField.valid) {
      console.log('sendMail', this.emailField.value);
    }
  }

}
