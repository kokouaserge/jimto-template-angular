import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseBannerComponent } from './entreprise-banner.component';

describe('EntrepriseBannerComponent', () => {
  let component: EntrepriseBannerComponent;
  let fixture: ComponentFixture<EntrepriseBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrepriseBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
