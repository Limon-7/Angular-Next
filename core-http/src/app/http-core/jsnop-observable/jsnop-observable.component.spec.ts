import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsnopObservableComponent } from './jsnop-observable.component';

describe('JsnopObservableComponent', () => {
  let component: JsnopObservableComponent;
  let fixture: ComponentFixture<JsnopObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsnopObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsnopObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
