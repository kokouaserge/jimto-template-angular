import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingVilleFeaturedComponent } from './landing-ville-featured.component';

describe('LandingVilleFeaturedComponent', () => {
  let component: LandingVilleFeaturedComponent;
  let fixture: ComponentFixture<LandingVilleFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingVilleFeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingVilleFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
