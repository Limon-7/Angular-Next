import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteringLayoutComponent } from './filtering-layout.component';

describe('FilteringLayoutComponent', () => {
  let component: FilteringLayoutComponent;
  let fixture: ComponentFixture<FilteringLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteringLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteringLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
