import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreObservableComponent } from './core-observable.component';

describe('CoreObservableComponent', () => {
  let component: CoreObservableComponent;
  let fixture: ComponentFixture<CoreObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
