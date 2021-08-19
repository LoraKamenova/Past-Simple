import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPicturesCampingComponentAdmin } from './all-pictures-camping.component-admin';

describe('AllPicturesCampingComponent', () => {
  let component: AllPicturesCampingComponentAdmin;
  let fixture: ComponentFixture<AllPicturesCampingComponentAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPicturesCampingComponentAdmin ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPicturesCampingComponentAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
