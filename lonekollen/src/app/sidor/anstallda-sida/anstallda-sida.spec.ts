import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnstalldaSida } from './anstallda-sida';

describe('AnstalldaSida', () => {
  let component: AnstalldaSida;
  let fixture: ComponentFixture<AnstalldaSida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnstalldaSida],
    }).compileComponents();

    fixture = TestBed.createComponent(AnstalldaSida);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
