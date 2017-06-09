import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlEncodeComponent } from './url-encode.component';

describe('UrlEncodeComponent', () => {
  let component: UrlEncodeComponent;
  let fixture: ComponentFixture<UrlEncodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlEncodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlEncodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
