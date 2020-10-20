import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinationLayoutComponent } from './combination-layout.component';

describe('CombinationLayoutComponent', () => {
  let component: CombinationLayoutComponent;
  let fixture: ComponentFixture<CombinationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombinationLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
