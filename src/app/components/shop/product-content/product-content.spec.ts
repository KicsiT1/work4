import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductContent } from './product-content';

describe('ProductContent', () => {
  let component: ProductContent;
  let fixture: ComponentFixture<ProductContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
