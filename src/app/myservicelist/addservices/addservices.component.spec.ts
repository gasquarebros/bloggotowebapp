import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddservicesComponent } from './addservices.component';

describe('AddservicesComponent', () => {
  let component: AddservicesComponent;
  let fixture: ComponentFixture<AddservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddservicesComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
