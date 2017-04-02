/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AboutComponent } from './about.component';
import { AngularFire, AngularFireModule } from "angularfire2";

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  const mockFirebaseConfig = {
    apiKey: 'asdfasdfasdfasdfasdf',
    authDomain: 'https://test.firebaseio.com',
    databaseURL: 'https://test.firebaseio.com',
    storageBucket: 'storage.com',
    messagingSenderId: '123412341234'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ],
      imports: [
        AngularFireModule.initializeApp(mockFirebaseConfig)
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [ AngularFire ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
