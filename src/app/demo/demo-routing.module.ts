import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { DemoComponent } from './components/demo/demo.component';

const routes: Routes = [
    {
        path: '',
        component: DemoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DemoRoutingModule { }