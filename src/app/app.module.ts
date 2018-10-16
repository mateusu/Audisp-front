import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AudienciasPage } from '../pages/audiencias/audiencias';
import { CalendarioPage } from '../pages/calendario/calendario';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {AudienciaBlocoPage} from '../pages/audiencia-bloco/audiencia-bloco';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AudienciasPage,
    CalendarioPage,
    HomePage,
    TabsPage,
    AudienciaBlocoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AudienciasPage,
    CalendarioPage,
    HomePage,
    TabsPage,
    AudienciaBlocoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
