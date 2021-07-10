import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaCategoriesComponent } from './sea-categories.component';

describe('SeaCategoriesComponent', () => {
  let component: SeaCategoriesComponent;
  let fixture: ComponentFixture<SeaCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeaCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
