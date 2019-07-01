// Core modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import 'hammerjs';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

// Icons
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faHome, faCode, faInfoCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';  // fas
import { faHeart, faUserCircle, faComment, faLightbulb } from '@fortawesome/free-regular-svg-icons'; // far


// App modules
import { PagesModule } from './pages/pages.module';
import { BlocksModule } from './blocks/blocks.module';

// Components
import { AppComponent } from './app.component';

// Configs
import { HammerConfig } from './hammer.config'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'not-found' },
    ]),
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    PagesModule,
    BlocksModule,
    AlertModule.forRoot(),
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(
      faCode,
      faCoffee,
      faComment,
      faExclamationTriangle,
      faHeart,
      faHome,
      faInfoCircle,
      faLightbulb,
      faUserCircle,
    );
  }
}
