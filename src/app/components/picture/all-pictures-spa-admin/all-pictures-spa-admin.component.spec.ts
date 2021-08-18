import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPicturesSpaAdminComponent } from './all-pictures-spa-admin.component';

describe('AllPicturesSpaAdminComponent', () => {
  let component: AllPicturesSpaAdminComponent;
  let fixture: ComponentFixture<AllPicturesSpaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPicturesSpaAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPicturesSpaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
