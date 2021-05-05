import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingStepComponent } from './landing-step.component';

describe('LandingStepComponent', () => {
  let component: LandingStepComponent;
  let fixture: ComponentFixture<LandingStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
