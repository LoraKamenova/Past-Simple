import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPicturesHotelsAdminComponent } from './all-pictures-hotels-admin.component';

describe('AllPicturesHotelsAdminComponent', () => {
  let component: AllPicturesHotelsAdminComponent;
  let fixture: ComponentFixture<AllPicturesHotelsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPicturesHotelsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPicturesHotelsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
