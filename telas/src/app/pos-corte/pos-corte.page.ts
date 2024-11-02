import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pos-corte',
  templateUrl: './pos-corte.page.html',
  styleUrls: ['./pos-corte.page.scss'],
})
export class PosCortePage{

  constructor(private navCtrl: NavController) { }

  nextScreen() {
    this.navCtrl.navigateForward('/validacao-costura');
  }
}
