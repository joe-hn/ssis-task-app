import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolAComponent } from './rol-a.component';

describe('RolAComponent', () => {
  let component: RolAComponent;
  let fixture: ComponentFixture<RolAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
