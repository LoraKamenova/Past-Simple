import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriesUserComponent } from './memories-user.component';

describe('MyMemoriesComponent', () => {
  let component: MemoriesUserComponent;
  let fixture: ComponentFixture<MemoriesUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoriesUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoriesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
