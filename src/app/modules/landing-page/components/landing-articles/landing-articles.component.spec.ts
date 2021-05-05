import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingArticlesComponent } from './landing-articles.component';

describe('LandingArticlesComponent', () => {
  let component: LandingArticlesComponent;
  let fixture: ComponentFixture<LandingArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
