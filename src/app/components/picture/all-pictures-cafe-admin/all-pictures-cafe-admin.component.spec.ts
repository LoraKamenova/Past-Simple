import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPicturesCafeAdminComponent } from './all-pictures-cafe-admin.component';

describe('AllPicturesCafeAdminComponent', () => {
  let component: AllPicturesCafeAdminComponent;
  let fixture: ComponentFixture<AllPicturesCafeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPicturesCafeAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPicturesCafeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
