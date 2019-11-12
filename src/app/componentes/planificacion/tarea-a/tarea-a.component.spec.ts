import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaAComponent } from './tarea-a.component';

describe('TareaAComponent', () => {
  let component: TareaAComponent;
  let fixture: ComponentFixture<TareaAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
