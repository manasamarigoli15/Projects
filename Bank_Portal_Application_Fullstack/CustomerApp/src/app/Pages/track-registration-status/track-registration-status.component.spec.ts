import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackRegistrationStatusComponent } from './track-registration-status.component';

describe('TrackRegistrationStatusComponent', () => {
  let component: TrackRegistrationStatusComponent;
  let fixture: ComponentFixture<TrackRegistrationStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackRegistrationStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackRegistrationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
