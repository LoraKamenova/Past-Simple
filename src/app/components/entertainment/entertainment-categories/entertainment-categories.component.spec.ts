import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentCategoriesComponent } from './entertainment-categories.component';

describe('EntertainmentCategoriesComponent', () => {
  let component: EntertainmentCategoriesComponent;
  let fixture: ComponentFixture<EntertainmentCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntertainmentCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainmentCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
