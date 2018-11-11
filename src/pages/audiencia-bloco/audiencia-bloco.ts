import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { BackendService } from '../../services/backend-service';

/**
 * Generated class for the AudienciaBlocoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-audiencia-bloco',
  templateUrl: 'audiencia-bloco.html',
})
export class AudienciaBlocoPage {

  @Input() nome;
  @Input() data;
  @Input() pauta;
  @Input() local;
  @Input() pautaId;

  constructor(public navCtrl: NavController, public navParams: NavParams, private backend: BackendService, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
  }

  likeAudiencia() {
    let userId = localStorage.getItem('user');
    if (userId !== 'none') {
      let body = { userId: userId, pautaId: this.pautaId };
      this.backend.likeAudiencia(body).subscribe((data) => {
        console.log(data);
      });
    }else{
      const toast = this.toastCtrl.create({
        message: 'Para curtir, é necessário logar',
        duration: 3000
      });
      toast.present();
    }
  }
}
