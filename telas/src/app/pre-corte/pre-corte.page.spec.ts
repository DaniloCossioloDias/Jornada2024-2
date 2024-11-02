import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreCortePage } from './pre-corte.page';

describe('PreCortePage', () => {
  let component: PreCortePage;
  let fixture: ComponentFixture<PreCortePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PreCortePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
