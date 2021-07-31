import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSloganComponent } from './edit-slogan.component';

describe('EditSloganComponent', () => {
  let component: EditSloganComponent;
  let fixture: ComponentFixture<EditSloganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSloganComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSloganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
