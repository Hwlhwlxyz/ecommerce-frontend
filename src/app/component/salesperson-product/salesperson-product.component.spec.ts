import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalespersonProductComponent } from './salesperson-product.component';

describe('SalespersonProductComponent', () => {
  let component: SalespersonProductComponent;
  let fixture: ComponentFixture<SalespersonProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalespersonProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalespersonProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
