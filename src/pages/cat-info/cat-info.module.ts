import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatInfoPage } from './cat-info';

@NgModule({
  declarations: [
    CatInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(CatInfoPage),
  ],
})
export class CatInfoPageModule {}
