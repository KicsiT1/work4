import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingCard } from './shoping-card';

describe('ShopingCard', () => {
  let component: ShopingCard;
  let fixture: ComponentFixture<ShopingCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopingCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopingCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
