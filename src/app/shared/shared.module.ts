import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
