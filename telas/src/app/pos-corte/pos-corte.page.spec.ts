import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PosCortePage } from './pos-corte.page';

describe('PosCortePage', () => {
  let component: PosCortePage;
  let fixture: ComponentFixture<PosCortePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PosCortePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
