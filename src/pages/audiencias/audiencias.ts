import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BackendService } from '../../services/backend-service';

@Component({
  selector: 'page-audiencias',
  templateUrl: 'audiencias.html'
})
export class AudienciasPage {

  constructor(public navCtrl: NavController, private backend: BackendService) {
    this.backend.getListaAudiencas().subscribe((data: any) => {
        this.audiencias = data;
    });
  }

  audiencias: any[];
}
