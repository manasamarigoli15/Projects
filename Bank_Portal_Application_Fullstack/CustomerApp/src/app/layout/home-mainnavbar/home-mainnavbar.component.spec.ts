import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainnavbarComponent } from './home-mainnavbar.component';

describe('HomeMainnavbarComponent', () => {
  let component: HomeMainnavbarComponent;
  let fixture: ComponentFixture<HomeMainnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMainnavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMainnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
