import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductDialogComponent } from './addproduct-dialog.component';

describe('AddproductDialogComponent', () => {
  let component: AddproductDialogComponent;
  let fixture: ComponentFixture<AddproductDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddproductDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproductDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
