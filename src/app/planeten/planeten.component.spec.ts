import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetenComponent } from './planeten.component';

describe('PlanetenComponent', () => {
  let component: PlanetenComponent;
  let fixture: ComponentFixture<PlanetenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanetenComponent]
    });
    fixture = TestBed.createComponent(PlanetenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
