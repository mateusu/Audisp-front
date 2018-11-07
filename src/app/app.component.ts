import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ModalController, NavParams } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';
import { ConfigPage } from '../pages/config/config';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;
  pages: Array<{ title: string, component: any }>;
  userLogged: boolean;
  showLoginModal: boolean;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public modalCtrl: ModalController) {

    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Configurações', component: ConfigPage }
    ];

    let status = localStorage.getItem('logged');

    if (status == 'true') {
      this.userLogged = true;
    } else {
      this.userLogged = false;
    }
  }

  ionViewDidLoad() {
    this.nav.setRoot(this.rootPage);

  }

  login() {
    let profileModal = this.modalCtrl.create(LoginPage);
    profileModal.present();

    profileModal.onDidDismiss(data => {
      console.log(data);
    });


  }
  logout() {
    localStorage.setItem('logged', 'none');
    location.reload();

  }
  
  openPage(page) {
    this.nav.push(page.component);
  }
}
