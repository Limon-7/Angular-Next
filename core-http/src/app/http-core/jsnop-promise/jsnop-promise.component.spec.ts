import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsnopPromiseComponent } from './jsnop-promise.component';

describe('JsnopPromiseComponent', () => {
  let component: JsnopPromiseComponent;
  let fixture: ComponentFixture<JsnopPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsnopPromiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsnopPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
