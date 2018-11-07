import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { BackendService } from '../../services/backend-service';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  register: boolean;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, private backend: BackendService, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.register = false;
  }

  login(mail, password) {
    this.backend.getAuthorization(mail, password).subscribe((data: any) => {
      if (data[0]) {
        this.viewCtrl.dismiss();
      } else {
        const toast = this.toastCtrl.create({
          message: 'Email ou senha inválidos',
          duration: 3000
        });
        toast.present();
      }
    });
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

}