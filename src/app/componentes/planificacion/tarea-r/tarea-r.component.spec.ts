import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaRComponent } from './tarea-r.component';

describe('TareaRComponent', () => {
  let component: TareaRComponent;
  let fixture: ComponentFixture<TareaRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
