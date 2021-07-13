import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeAlbumComponent } from './cafe-album.component';

describe('CafeAlbumComponent', () => {
  let component: CafeAlbumComponent;
  let fixture: ComponentFixture<CafeAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafeAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
