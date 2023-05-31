import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedJobSeekerComponent } from './approved-job-seeker.component';

describe('ApprovedJobSeekerComponent', () => {
  let component: ApprovedJobSeekerComponent;
  let fixture: ComponentFixture<ApprovedJobSeekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedJobSeekerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovedJobSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
