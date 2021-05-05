import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AProposMissionComponent } from './a-propos-mission.component';

describe('AProposMissionComponent', () => {
  let component: AProposMissionComponent;
  let fixture: ComponentFixture<AProposMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AProposMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AProposMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
