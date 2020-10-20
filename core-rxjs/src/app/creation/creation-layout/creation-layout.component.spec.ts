import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationLayoutComponent } from './creation-layout.component';

describe('CreationLayoutComponent', () => {
  let component: CreationLayoutComponent;
  let fixture: ComponentFixture<CreationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
