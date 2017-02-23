/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MenuComponent } from './menu.component';
import { FormsModule } from "@angular/forms";
import { BlocksService } from "../blocks.service";
import { RouterModule, Router } from "@angular/router";
import { AngularFire, AngularFireModule } from "angularfire2";

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let mockRouter: any;
  class MockRouter {
    navigate = jasmine.createSpy('navigate');
  }

  const mockFirebaseConfig = {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    storageBucket: '',
    messagingSenderId: ''
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      imports: [
        FormsModule,
        RouterModule.forChild([]),
        AngularFireModule.initializeApp(mockFirebaseConfig)
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [ BlocksService, { provide: Router, useValue: MockRouter }, AngularFire ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    mockRouter = new MockRouter();
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
