import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeneratorService } from '@core/services/generator.service';
import { EmployeeData } from '@core/models/employee.model';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

const names = ['juan', 'felipe', 'maria', 'jose']

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  salesList: EmployeeData[] = [];
  bList: EmployeeData[] = [];
  value$: Observable<number>;
  // sub$: Subscription;

  constructor(
    private generatorService: GeneratorService
  ) {
    this.value$ = this.generatorService.getData().pipe(tap(value => console.log(value)));
  }

  ngOnInit(): void {
    this.salesList = this.generatorService.generate(names, [10, 20], 10);
    this.bList = this.generatorService.generate(names, [10, 20], 10);
  }

  addItem(list: EmployeeData[], label: string) {
    list.unshift({
      label,
      num: this.generatorService.generateNumber([10, 20])
    });
  }

  ngOnDestroy(): void {
    // this.sub$.unsubscribe();
  }

}
