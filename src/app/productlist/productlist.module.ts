import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductlistPage } from './productlist.page';
import { ShareModulePageModule } from '../share-module/share-module.module';
import { ProductFilterComponent } from './product-filter/product-filter.component';

const routes: Routes = [
  {
    path: '',
    component: ProductlistPage
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
    ProductlistPage,
    ProductFilterComponent
  ],
  entryComponents: [
    ProductFilterComponent
  ]
})
export class ProductlistPageModule {}
