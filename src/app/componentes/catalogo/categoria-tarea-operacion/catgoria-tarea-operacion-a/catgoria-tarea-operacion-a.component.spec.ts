import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatgoriaTareaOperacionAComponent } from './catgoria-tarea-operacion-a.component';

describe('CatgoriaTareaOperacionAComponent', () => {
  let component: CatgoriaTareaOperacionAComponent;
  let fixture: ComponentFixture<CatgoriaTareaOperacionAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatgoriaTareaOperacionAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatgoriaTareaOperacionAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
