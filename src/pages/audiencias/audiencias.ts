import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-audiencias',
  templateUrl: 'audiencias.html'
})
export class AudienciasPage {

  constructor(public navCtrl: NavController) {

  }

  audiencias = [
    {
      nome: 'Audiência Pública',
      data: '23/10/2018 11:30',
      pauta: 'Audiência Pública sobre desmatamento'
    },
    {
      nome: 'Audiência Pública',
      data: '24/10/2018 11:30',
      pauta: 'Audiência Pública sobre pudim'
    },
    {
      nome: 'Audiência Pública',
      data: '24/10/2018 13:30',
      pauta: 'Audiência Pública sobre Naruto'
    },
    {
      nome: 'Audiência Pública',
      data: '25/10/2018 15:30',
      pauta: 'Audiência Pública sobre necessidade de acabar com os animes'
    },
    {
      nome: 'Audiência Pública',
      data: '26/10/2018 18:30',
      pauta: 'Audiência Pública sobre RP2'
    }
  
  ];
}
