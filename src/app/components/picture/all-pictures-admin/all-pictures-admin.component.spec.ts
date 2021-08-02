import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPicturesAdminComponent } from './all-pictures-admin.component';

describe('AllPicturesAdminComponent', () => {
  let component: AllPicturesAdminComponent;
  let fixture: ComponentFixture<AllPicturesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPicturesAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPicturesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
