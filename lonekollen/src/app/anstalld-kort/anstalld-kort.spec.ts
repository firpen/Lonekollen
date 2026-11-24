import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnstalldKort } from './anstalld-kort';

describe('AnstalldKort', () => {
  let component: AnstalldKort;
  let fixture: ComponentFixture<AnstalldKort>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnstalldKort],
    }).compileComponents();

    fixture = TestBed.createComponent(AnstalldKort);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
