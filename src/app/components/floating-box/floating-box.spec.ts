import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingBox } from './floating-box';

describe('FloatingBox', () => {
  let component: FloatingBox;
  let fixture: ComponentFixture<FloatingBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
