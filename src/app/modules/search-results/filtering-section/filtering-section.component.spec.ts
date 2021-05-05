import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteringSectionComponent } from './filtering-section.component';

describe('FilteringSectionComponent', () => {
  let component: FilteringSectionComponent;
  let fixture: ComponentFixture<FilteringSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteringSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteringSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
