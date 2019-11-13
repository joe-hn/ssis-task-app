import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionEComponent } from './direccion-e.component';

describe('DireccionEComponent', () => {
  let component: DireccionEComponent;
  let fixture: ComponentFixture<DireccionEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DireccionEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DireccionEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
