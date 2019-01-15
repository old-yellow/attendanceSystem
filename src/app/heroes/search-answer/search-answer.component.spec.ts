import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAnswerComponent } from './search-answer.component';

describe('SearchAnswerComponent', () => {
  let component: SearchAnswerComponent;
  let fixture: ComponentFixture<SearchAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
