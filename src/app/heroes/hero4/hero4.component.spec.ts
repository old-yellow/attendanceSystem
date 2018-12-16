import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hero4Component } from './hero4.component';

describe('Hero4Component', () => {
  let component: Hero4Component;
  let fixture: ComponentFixture<Hero4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hero4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hero4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
