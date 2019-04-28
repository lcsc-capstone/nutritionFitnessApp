import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuserPage } from './muser.page';

describe('MuserPage', () => {
  let component: MuserPage;
  let fixture: ComponentFixture<MuserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
