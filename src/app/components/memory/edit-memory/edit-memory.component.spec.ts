import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMemoryComponent } from './edit-memory.component';

describe('EditMemoryComponent', () => {
  let component: EditMemoryComponent;
  let fixture: ComponentFixture<EditMemoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMemoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
