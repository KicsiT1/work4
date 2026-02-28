import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLayoutSwitcher } from './product-layout-switcher';

describe('ProductLayoutSwitcher', () => {
  let component: ProductLayoutSwitcher;
  let fixture: ComponentFixture<ProductLayoutSwitcher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductLayoutSwitcher]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductLayoutSwitcher);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
