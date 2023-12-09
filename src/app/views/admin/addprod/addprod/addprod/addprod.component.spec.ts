import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprodComponent } from './addprod.component';

describe('AddprodComponent', () => {
  let component: AddprodComponent;
  let fixture: ComponentFixture<AddprodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddprodComponent]
    });
    fixture = TestBed.createComponent(AddprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
