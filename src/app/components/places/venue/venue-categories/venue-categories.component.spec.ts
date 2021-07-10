import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueCategoriesComponent } from './venue-categories.component';

describe('VenueCategoriesComponent', () => {
  let component: VenueCategoriesComponent;
  let fixture: ComponentFixture<VenueCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
