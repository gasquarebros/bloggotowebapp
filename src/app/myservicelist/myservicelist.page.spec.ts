import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyservicelistPage } from './myservicelist.page';

describe('MyservicelistPage', () => {
  let component: MyservicelistPage;
  let fixture: ComponentFixture<MyservicelistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyservicelistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyservicelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
