import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaDescripcionMComponent } from './tarea-descripcion-m.component';

describe('TareaDescripcionMComponent', () => {
  let component: TareaDescripcionMComponent;
  let fixture: ComponentFixture<TareaDescripcionMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaDescripcionMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaDescripcionMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
