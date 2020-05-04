import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { QuicklinkModule } from 'ngx-quicklink';
import { FibonacciPipe } from './pipes/fibonacci.pipe';



@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    FibonacciPipe,
  ],
  exports: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    FibonacciPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    QuicklinkModule
  ]
})
export class SharedModule { }
