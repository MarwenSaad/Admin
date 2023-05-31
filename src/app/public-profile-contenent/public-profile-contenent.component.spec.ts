import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicProfileContenentComponent } from './public-profile-contenent.component';

describe('PublicProfileContenentComponent', () => {
  let component: PublicProfileContenentComponent;
  let fixture: ComponentFixture<PublicProfileContenentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicProfileContenentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicProfileContenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
