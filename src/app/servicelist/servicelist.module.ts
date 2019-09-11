import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ServicelistPage } from './servicelist.page';
import { ShareModulePageModule } from '../share-module/share-module.module';
import { FiltercomponentComponent } from './filtercomponent/filtercomponent.component';

const routes: Routes = [
  {
    path: '',
    component: ServicelistPage
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
  declarations: [
    ServicelistPage,
    FiltercomponentComponent
  ],
  entryComponents: [
    FiltercomponentComponent
  ]
})
export class ServicelistPageModule {}
