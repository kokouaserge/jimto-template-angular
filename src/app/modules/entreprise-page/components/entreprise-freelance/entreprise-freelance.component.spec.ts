import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseFreelanceComponent } from './entreprise-freelance.component';

describe('EntrepriseFreelanceComponent', () => {
  let component: EntrepriseFreelanceComponent;
  let fixture: ComponentFixture<EntrepriseFreelanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrepriseFreelanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseFreelanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
