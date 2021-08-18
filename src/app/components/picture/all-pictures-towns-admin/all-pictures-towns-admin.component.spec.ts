import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPicturesTownsAdminComponent } from './all-pictures-towns-admin.component';

describe('AllPicturesTownsAdminComponent', () => {
  let component: AllPicturesTownsAdminComponent;
  let fixture: ComponentFixture<AllPicturesTownsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPicturesTownsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPicturesTownsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
