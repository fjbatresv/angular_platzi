import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';
import { ListComponent } from './components/list/list.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MaterialModule } from '@material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        LayoutComponent,
        ListComponent
    ],
    imports: [
        CommonModule,
        ContactRoutingModule,
        SharedModule,
        MaterialModule,
        FormsModule
    ],
})
export class ContactModule { }
