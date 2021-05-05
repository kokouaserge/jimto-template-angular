import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancePageComponent } from './freelance-page.component';

describe('FreelancePageComponent', () => {
  let component: FreelancePageComponent;
  let fixture: ComponentFixture<FreelancePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
