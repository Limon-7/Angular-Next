import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorePromiseComponent } from './core-promise.component';

describe('CorePromiseComponent', () => {
  let component: CorePromiseComponent;
  let fixture: ComponentFixture<CorePromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorePromiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorePromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
