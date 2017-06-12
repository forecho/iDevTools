import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicodeComponent } from './unicode.component';

describe('UnicodeComponent', () => {
  let component: UnicodeComponent;
  let fixture: ComponentFixture<UnicodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnicodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnicodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
