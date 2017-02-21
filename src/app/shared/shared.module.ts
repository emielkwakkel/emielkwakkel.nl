import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PercentageComponent } from './chart/percentage/percentage.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PercentageComponent
  ],
  exports: [
    PercentageComponent
  ]
})
export class SharedModule { }
