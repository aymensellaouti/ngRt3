import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotatingCardComponent } from './rotating-card.component';

describe('RotatingCardComponent', () => {
  let component: RotatingCardComponent;
  let fixture: ComponentFixture<RotatingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotatingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotatingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
