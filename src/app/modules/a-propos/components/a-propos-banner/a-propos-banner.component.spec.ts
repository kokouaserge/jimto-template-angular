import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AProposBannerComponent } from './a-propos-banner.component';

describe('AProposBannerComponent', () => {
  let component: AProposBannerComponent;
  let fixture: ComponentFixture<AProposBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AProposBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AProposBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
