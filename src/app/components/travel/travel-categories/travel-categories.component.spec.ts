import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelCategoriesComponent } from './travel-categories.component';

describe('TravelCategoriesComponent', () => {
  let component: TravelCategoriesComponent;
  let fixture: ComponentFixture<TravelCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
