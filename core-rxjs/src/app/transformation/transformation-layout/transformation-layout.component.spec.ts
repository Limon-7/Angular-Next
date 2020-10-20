import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformationLayoutComponent } from './transformation-layout.component';

describe('TransformationLayoutComponent', () => {
  let component: TransformationLayoutComponent;
  let fixture: ComponentFixture<TransformationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransformationLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
