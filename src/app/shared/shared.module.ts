import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightComponent } from './highlight/highlight.component';
import { PercentageComponent } from './chart/percentage/percentage.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HighlightComponent,
    PercentageComponent
  ],
  exports: [
    HighlightComponent,
    PercentageComponent
  ]
})
export class SharedModule { }
