import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ServiceviewPage } from './serviceview.page';
import { ShareModulePageModule } from '../share-module/share-module.module';

const routes: Routes = [
  {
    path: '',
    component: ServiceviewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModulePageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ServiceviewPage]
})
export class ServiceviewPageModule {}