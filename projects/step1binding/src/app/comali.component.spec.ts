import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComaliComponent } from './comali.component';

describe('ComaliComponent', () => {
  let component: ComaliComponent;
  let fixture: ComponentFixture<ComaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
