import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMemoriesAdminComponent } from './all-memories-admin.component';

describe('AllMemoriesAdminComponent', () => {
  let component: AllMemoriesAdminComponent;
  let fixture: ComponentFixture<AllMemoriesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMemoriesAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMemoriesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
