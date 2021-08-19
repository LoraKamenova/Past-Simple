import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPicturesMediaAdminComponent } from './all-pictures-media-admin.component';

describe('AllPicturesMediaAdminComponent', () => {
  let component: AllPicturesMediaAdminComponent;
  let fixture: ComponentFixture<AllPicturesMediaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPicturesMediaAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPicturesMediaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
