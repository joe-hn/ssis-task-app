import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatgoriaTareaOperacionEComponent } from './catgoria-tarea-operacion-e.component';

describe('CatgoriaTareaOperacionEComponent', () => {
  let component: CatgoriaTareaOperacionEComponent;
  let fixture: ComponentFixture<CatgoriaTareaOperacionEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatgoriaTareaOperacionEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatgoriaTareaOperacionEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
