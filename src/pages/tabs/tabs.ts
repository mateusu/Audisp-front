import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { AudienciasPage } from '../audiencias/audiencias';
import { CalendarioPage } from '../calendario/calendario';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AudienciasPage;
  tab3Root = CalendarioPage;

  constructor() {

  }
}
