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
    this.register = false;
  }

  login(mail, password) {
    this.backend.getAuthorization(mail, password).subscribe((data: any) => {
      if (data[0]) {
        this.viewCtrl.dismiss();
        localStorage.setItem('logged', 'true');
        location.reload();

      } else {
        const toast = this.toastCtrl.create({
          message: 'Email ou senha inválidos',
          duration: 3000
        });
        toast.present();
      }
    });
  }

  registrar(mail, pass, nome, nasc) {
    const user = {
      email: mail,
      senha: pass,
      nome: nome,
      nascimento: nasc
    }

    this.backend.registerUser(user).subscribe((data: { status: string, text: string }) => {
      if (data.status === 'nok') {
        const toast = this.toastCtrl.create({
          message: data.text,
          duration: 3000
        });
        toast.present();
      } else if (data.status === 'ok') {
        this.login(mail, pass);
        this.viewCtrl.dismiss();
      }
    });
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

}