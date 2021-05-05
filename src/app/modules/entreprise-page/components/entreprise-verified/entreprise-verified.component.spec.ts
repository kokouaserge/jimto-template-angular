import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseVerifiedComponent } from './entreprise-verified.component';

describe('EntrepriseVerifiedComponent', () => {
  let component: EntrepriseVerifiedComponent;
  let fixture: ComponentFixture<EntrepriseVerifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrepriseVerifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseVerifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
