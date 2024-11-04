import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pos-corte',
  templateUrl: './pos-corte.page.html',
  styleUrls: ['./pos-corte.page.scss'],
})
export class PosCortePage{
  detalhesTexto: string = '';

  constructor(private router: Router) {}

  nextScreen() {
    const preCorteImage = localStorage.getItem('preCorteImage');
    this.router.navigate(['/validacao-costura'], {
      queryParams: {
        preCorteImage: preCorteImage,
        posCorteDetalhes: this.detalhesTexto
      }
    });
  }
}
