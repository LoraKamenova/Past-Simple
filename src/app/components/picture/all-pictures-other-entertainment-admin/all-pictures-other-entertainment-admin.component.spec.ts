import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPicturesOtherEntertainmentAdminComponent } from './all-pictures-other-entertainment-admin.component';

describe('AllPicturesOtherEntertainmentAdminComponent', () => {
  let component: AllPicturesOtherEntertainmentAdminComponent;
  let fixture: ComponentFixture<AllPicturesOtherEntertainmentAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPicturesOtherEntertainmentAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPicturesOtherEntertainmentAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
