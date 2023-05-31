import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJobSeekerComponent } from './new-job-seeker.component';

describe('NewJobSeekerComponent', () => {
  let component: NewJobSeekerComponent;
  let fixture: ComponentFixture<NewJobSeekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewJobSeekerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewJobSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
