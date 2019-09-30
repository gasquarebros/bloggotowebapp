import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookserviceComponent } from './bookservice.component';

describe('BookserviceComponent', () => {
  let component: BookserviceComponent;
  let fixture: ComponentFixture<BookserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookserviceComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
