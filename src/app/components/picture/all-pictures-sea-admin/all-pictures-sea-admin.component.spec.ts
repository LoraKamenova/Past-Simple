import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPicturesSeaAdminComponent } from './all-pictures-sea-admin.component';

describe('AllPicturesSeaAdminComponent', () => {
  let component: AllPicturesSeaAdminComponent;
  let fixture: ComponentFixture<AllPicturesSeaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPicturesSeaAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPicturesSeaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
