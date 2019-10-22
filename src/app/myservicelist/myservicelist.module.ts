import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyservicelistPage } from './myservicelist.page';
import { ShareModulePageModule } from '../share-module/share-module.module';
import { AddservicesComponent } from './addservices/addservices.component'

const routes: Routes = [
  {
    path: '',
    component: MyservicelistPage
  },
  {
    path: 'addservice',
    component: AddservicesComponent
  },
  { 
    path: 'addservice/:any', 
    component: AddservicesComponent 
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ShareModulePageModule
  ],
  declarations: [
    MyservicelistPage,
    AddservicesComponent
  ],
  entryComponents: [
  ],
  exports: [
    AddservicesComponent
  ]
})
export class MyservicelistPageModule {}
