/* tslint:disable:no-unused-variable */
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MenuComponent } from './menu.component';
import { FormsModule } from "@angular/forms";
import { BlocksService } from "../blocks.service";
import { RouterModule, Router } from "@angular/router";

fdescribe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let mockRouter: any;
  class MockRouter {
    navigate = jasmine.createSpy('navigate');
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      imports: [
        FormsModule,
        RouterModule.forChild([]),
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [
        BlocksService,
        {
          provide: Router,
          useValue: MockRouter
        },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    mockRouter = new MockRouter();
    fixture = TestBed.createComponent(MenuComponent);
    console.log(MenuComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
