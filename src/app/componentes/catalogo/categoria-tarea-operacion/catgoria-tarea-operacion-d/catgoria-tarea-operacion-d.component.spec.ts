import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatgoriaTareaOperacionDComponent } from './catgoria-tarea-operacion-d.component';

describe('CatgoriaTareaOperacionDComponent', () => {
  let component: CatgoriaTareaOperacionDComponent;
  let fixture: ComponentFixture<CatgoriaTareaOperacionDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatgoriaTareaOperacionDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatgoriaTareaOperacionDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
