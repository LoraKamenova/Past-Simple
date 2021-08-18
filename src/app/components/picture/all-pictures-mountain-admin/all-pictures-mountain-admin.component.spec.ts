import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPicturesMountainAdminComponent } from './all-pictures-mountain-admin.component';

describe('AllPicturesMountainAdminComponent', () => {
  let component: AllPicturesMountainAdminComponent;
  let fixture: ComponentFixture<AllPicturesMountainAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPicturesMountainAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPicturesMountainAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
