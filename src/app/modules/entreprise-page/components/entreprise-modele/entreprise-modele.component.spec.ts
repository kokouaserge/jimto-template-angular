import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseModeleComponent } from './entreprise-modele.component';

describe('EntrepriseModeleComponent', () => {
  let component: EntrepriseModeleComponent;
  let fixture: ComponentFixture<EntrepriseModeleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrepriseModeleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseModeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
