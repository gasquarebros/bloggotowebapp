import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ManagebookingsPage } from './managebookings.page';
import { ShareModulePageModule } from '../share-module/share-module.module';

const routes: Routes = [
  {
    path: '',
    component: ManagebookingsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ShareModulePageModule
  ],
  declarations: [ManagebookingsPage]
})
export class ManagebookingsPageModule {}
