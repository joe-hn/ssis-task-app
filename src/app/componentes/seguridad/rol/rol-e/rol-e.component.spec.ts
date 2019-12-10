import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolEComponent } from './rol-e.component';

describe('RolEComponent', () => {
  let component: RolEComponent;
  let fixture: ComponentFixture<RolEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
