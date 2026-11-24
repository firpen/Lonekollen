import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detaljpanel } from './detaljpanel';

describe('Detaljpanel', () => {
  let component: Detaljpanel;
  let fixture: ComponentFixture<Detaljpanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Detaljpanel],
    }).compileComponents();

    fixture = TestBed.createComponent(Detaljpanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
