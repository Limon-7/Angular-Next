import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleteContainerOutletComponent } from './templete-container-outlet.component';

describe('TempleteContainerOutletComponent', () => {
  let component: TempleteContainerOutletComponent;
  let fixture: ComponentFixture<TempleteContainerOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempleteContainerOutletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempleteContainerOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
