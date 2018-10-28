import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { BackendService } from '../../services/backend-service';

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


  constructor(public navCtrl: NavController, public navParams: NavParams, public backend: BackendService) {
    backend.getUserLikes().subscribe((data: any) => {
      this.likesList = data;
    })
  }

  ionViewDidLoad() {
  }

  goBack() {
    this.navCtrl.pop();
  }

  loga(f: NgForm) {
    console.log(f);
  }
  
  likesList: any[];
}
