import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicelistPage } from './servicelist.page';

describe('ServicelistPage', () => {
  let component: ServicelistPage;
  let fixture: ComponentFixture<ServicelistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicelistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
