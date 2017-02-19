// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

// Components
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { MenuComponent } from "./menu/menu.component";
import { FormsModule } from "@angular/forms";
import { BlocksService } from "./blocks.service";
import { Blocks } from "./blocks";

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
  ],
  providers: [
    BlocksService,
    Blocks
  ]
})
export class BlocksModule {
}
