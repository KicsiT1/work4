import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowUpButton } from './arrow-up-button';

describe('ArrowUpButton', () => {
  let component: ArrowUpButton;
  let fixture: ComponentFixture<ArrowUpButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowUpButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrowUpButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
