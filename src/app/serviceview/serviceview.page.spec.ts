import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceviewPage } from './serviceview.page';

describe('ServiceviewPage', () => {
  let component: ServiceviewPage;
  let fixture: ComponentFixture<ServiceviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
