import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeContentComponent } from './life-content.component';

describe('LifeContentComponent', () => {
  let component: LifeContentComponent;
  let fixture: ComponentFixture<LifeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
