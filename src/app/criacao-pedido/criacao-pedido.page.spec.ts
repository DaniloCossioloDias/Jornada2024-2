import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriacaoPedidoPage } from './criacao-pedido.page';

describe('CriacaoPedidoPage', () => {
  let component: CriacaoPedidoPage;
  let fixture: ComponentFixture<CriacaoPedidoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CriacaoPedidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
