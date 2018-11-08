import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BackendService } from '../../services/backend-service';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the ConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

  likesList: any[] = [];
  userId: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public backend: BackendService, public toastCtrl: ToastController) {
    this.userId = parseInt(localStorage.getItem('user'));
    backend.getUserLikes({userId: this.userId}).subscribe((data: any[]) => {
      this.likesList = data;
    });
   
    this.likesList.map(row => {
      row.nome = row.nome.charAt(0).toUpperCase() + row.nome.slice(1);
      row.score = row.score;
    });
  }

  ionViewDidLoad() {
  }

  goBack() {
    this.navCtrl.pop();
  }
  salvar() {
    let body = { userId: 0, pautas: [] };
    body.userId = this.userId;
    this.likesList.map(
      (pauta) => {
        body.pautas.push({
          id: pauta.id,
          score: pauta.score
        });
      }
    );
    this.backend.updateUserLikes(body).subscribe((data: any) => {
      if (data.status === 'ok') {
        this.showToast(data.text);
      } else {
        this.showToast('Algo deu errado :(');
      }
    });
  }

  showToast(text) {
    const toast = this.toastCtrl.create({
      message: text,
      duration: 3000
    });
    toast.present();
  }
}
