import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresServicesSecuriteComponent } from './offres-services-securite.component';

describe('OffresServicesSecuriteComponent', () => {
  let component: OffresServicesSecuriteComponent;
  let fixture: ComponentFixture<OffresServicesSecuriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffresServicesSecuriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffresServicesSecuriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
