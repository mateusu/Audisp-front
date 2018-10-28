import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AudienciaBlocoPage');
  }

}
