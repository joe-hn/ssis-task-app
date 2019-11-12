import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaEComponent } from './tarea-e.component';

describe('TareaEComponent', () => {
  let component: TareaEComponent;
  let fixture: ComponentFixture<TareaEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
