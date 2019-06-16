// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Components
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { BlocksService } from './blocks.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forChild([])
  ],
  declarations: [
    HeaderComponent,
    MainComponent,
    MenuComponent,
  ],
  exports: [
    HeaderComponent,
    MainComponent
  ],
  providers: [
    BlocksService
  ],
})
export class BlocksModule {
}
