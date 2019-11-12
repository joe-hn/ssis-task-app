import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaDescripcionAComponent } from './tarea-descripcion-a.component';

describe('TareaDescripcionAComponent', () => {
  let component: TareaDescripcionAComponent;
  let fixture: ComponentFixture<TareaDescripcionAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaDescripcionAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaDescripcionAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
