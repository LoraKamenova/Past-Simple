import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPicturesRestaurantsAdminComponent } from './all-pictures-restaurants-admin.component';

describe('AllPicturesRestaurantsAdminComponent', () => {
  let component: AllPicturesRestaurantsAdminComponent;
  let fixture: ComponentFixture<AllPicturesRestaurantsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPicturesRestaurantsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPicturesRestaurantsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
