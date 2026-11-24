import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LonespecSida } from './lonespec-sida';

describe('LonespecSida', () => {
  let component: LonespecSida;
  let fixture: ComponentFixture<LonespecSida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LonespecSida],
    }).compileComponents();

    fixture = TestBed.createComponent(LonespecSida);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
