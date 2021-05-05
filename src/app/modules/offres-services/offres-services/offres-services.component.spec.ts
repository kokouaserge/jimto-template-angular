import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresServicesComponent } from './offres-services.component';

describe('OffresServicesComponent', () => {
  let component: OffresServicesComponent;
  let fixture: ComponentFixture<OffresServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffresServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffresServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
