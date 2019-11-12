import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaDComponent } from './tarea-d.component';

describe('TareaDComponent', () => {
  let component: TareaDComponent;
  let fixture: ComponentFixture<TareaDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
