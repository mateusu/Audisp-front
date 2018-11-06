import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import {IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AudienciasPage } from '../pages/audiencias/audiencias';
import { BackendService } from '../services/backend-service';
import { CalendarioPage } from '../pages/calendario/calendario';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {AudienciaBlocoPage} from '../pages/audiencia-bloco/audiencia-bloco';
import {ConfigPage} from '../pages/config/config';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AudienciasPage,
    CalendarioPage,
    HomePage,
    TabsPage,
    AudienciaBlocoPage,
    ConfigPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AudienciasPage,
    CalendarioPage,
    HomePage,
    TabsPage,
    AudienciaBlocoPage, 
    ConfigPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BackendService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
