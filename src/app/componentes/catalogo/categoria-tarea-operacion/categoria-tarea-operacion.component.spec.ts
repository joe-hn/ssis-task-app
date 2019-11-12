import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaTareaOperacionComponent } from './categoria-tarea-operacion.component';

describe('CategoriaTareaOperacionComponent', () => {
  let component: CategoriaTareaOperacionComponent;
  let fixture: ComponentFixture<CategoriaTareaOperacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaTareaOperacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaTareaOperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
