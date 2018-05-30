import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SloganPage } from './slogan';

@NgModule({
  declarations: [
    SloganPage,
  ],
  imports: [
    IonicPageModule.forChild(SloganPage),
  ],
})
export class SloganPageModule {}
