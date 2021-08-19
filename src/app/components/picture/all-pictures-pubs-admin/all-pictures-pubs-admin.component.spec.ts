import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPicturesPubsAdminComponent } from './all-pictures-pubs-admin.component';

describe('AllPicturesPubsAdminComponent', () => {
  let component: AllPicturesPubsAdminComponent;
  let fixture: ComponentFixture<AllPicturesPubsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPicturesPubsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPicturesPubsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
