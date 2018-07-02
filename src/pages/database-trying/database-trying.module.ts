import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatabaseTryingPage } from './database-trying';

@NgModule({
  declarations: [
    DatabaseTryingPage,
  ],
  imports: [
    IonicPageModule.forChild(DatabaseTryingPage),
  ],
})
export class DatabaseTryingPageModule {}
