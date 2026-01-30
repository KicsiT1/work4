import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUs } from './follow-us';

describe('FollowUs', () => {
  let component: FollowUs;
  let fixture: ComponentFixture<FollowUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowUs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowUs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
