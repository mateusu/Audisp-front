import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ModalController, NavParams } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

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
  notifi: boolean;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public modalCtrl: ModalController, private localNotifications: LocalNotifications) {

    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Configurações', component: ConfigPage }
    ];

    let checkNotif = localStorage.getItem('notifi');
    console.log(checkNotif);
    if (checkNotif === 'on') this.notifi = true;
    else { this.notifi = false; }
    let status = localStorage.getItem('logged');

    if (status !== 'none') {
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
    localStorage.setItem('user', 'none');
    location.reload();

  }

  openPage(page) {
    this.nav.push(page.component);
  }

  setNotificacao(event) {
    if (event.value) {
      this.notifi = true;
      localStorage.setItem('notifi', 'on');
      this.localNotifications.schedule({
        id: 1,
        title: 'Oi',
        text: 'Notificacao teste',
        trigger: { firstAt: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDay(), 12, 0, 0, 0) },
        every: 'day'
      });

    } else {
      this.notifi = false
      localStorage.setItem('notifi', 'off');

    }
  }
}
