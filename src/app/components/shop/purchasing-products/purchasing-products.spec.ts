import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingProducts } from './purchasing-products';

describe('PurchasingProducts', () => {
  let component: PurchasingProducts;
  let fixture: ComponentFixture<PurchasingProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchasingProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasingProducts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
