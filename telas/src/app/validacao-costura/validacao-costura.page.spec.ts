import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidacaoCosturaPage } from './validacao-costura.page';

describe('ValidacaoCosturaPage', () => {
  let component: ValidacaoCosturaPage;
  let fixture: ComponentFixture<ValidacaoCosturaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidacaoCosturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
