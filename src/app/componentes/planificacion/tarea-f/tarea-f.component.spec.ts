import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaFComponent } from './tarea-f.component';

describe('TareaFComponent', () => {
  let component: TareaFComponent;
  let fixture: ComponentFixture<TareaFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
