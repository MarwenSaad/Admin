import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCompaniesComponent } from './new-companies.component';

describe('NewCompaniesComponent', () => {
  let component: NewCompaniesComponent;
  let fixture: ComponentFixture<NewCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCompaniesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
