/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RedditsComponent } from './reddits.component';

describe('RedditsComponent', () => {
  let component: RedditsComponent;
  let fixture: ComponentFixture<RedditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
