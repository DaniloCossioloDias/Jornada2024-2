import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private menuController: MenuController) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.menuController.close();
      });
  }
}
 
