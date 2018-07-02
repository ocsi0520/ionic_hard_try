import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InputControlComponent } from '../components/input-control/input-control';
import { ItemStatusControllerDirective } from '../directives/item-status-controller/item-status-controller';
import { SimpleDataProvider } from '../providers/simple-data/simple-data';
import { HttpClientModule } from '@angular/common/http';
import { GuestPage } from '../pages/guest/guest';
import { FormsPage } from '../pages/forms/forms';
import { StatusComponent } from '../components/status/status';
import { DatabaseTryingPage } from '../pages/database-trying/database-trying';
import { DatabaseHandlerProvider } from '../providers/database-handler/database-handler';
import { SQLite } from '@ionic-native/sqlite';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GuestPage,
    InputControlComponent,
    StatusComponent,
    ItemStatusControllerDirective,
    FormsPage,
    DatabaseTryingPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GuestPage,
    FormsPage,
    DatabaseTryingPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SimpleDataProvider,
    DatabaseHandlerProvider,
    SQLite,
  ]
})
export class AppModule {}
