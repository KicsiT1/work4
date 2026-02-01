import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeToNews } from './subscribe-to-news';

describe('SubscribeToNews', () => {
  let component: SubscribeToNews;
  let fixture: ComponentFixture<SubscribeToNews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscribeToNews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribeToNews);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
