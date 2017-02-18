// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

// Components
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { MenuComponent } from "./menu/menu.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([])
  ],
  declarations: [
    HeaderComponent,
    MainComponent,
    MenuComponent
  ],
  exports: [
    HeaderComponent,
    MainComponent
  ]
})
export class BlocksModule {
}
