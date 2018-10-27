import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';

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


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  loga(f: NgForm){
    console.log(f);
  }
  likesList = [{nome: 'Saúde', id:'saude'},{nome: 'Educação', id: 'educacao'},{nome: 'Meio Ambiente', id: 'meioambiente'},{nome: 'Gastos Públicos', id: 'gastospublicos'}];

}
