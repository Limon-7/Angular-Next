import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityLayoutComponent } from './utility-layout.component';

describe('UtilityLayoutComponent', () => {
  let component: UtilityLayoutComponent;
  let fixture: ComponentFixture<UtilityLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilityLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilityLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
