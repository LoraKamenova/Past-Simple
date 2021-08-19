import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPicturesCinemaAdminComponent } from './all-pictures-cinema-admin.component';

describe('AllPicturesCinemaAdminComponent', () => {
  let component: AllPicturesCinemaAdminComponent;
  let fixture: ComponentFixture<AllPicturesCinemaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPicturesCinemaAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPicturesCinemaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
