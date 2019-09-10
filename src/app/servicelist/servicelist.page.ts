import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonServicesComponent } from '../share-module/common-services/common-services.component';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { MenuController, PopoverController, ModalController, LoadingController, ToastController } from '@ionic/angular';
import { FiltercomponentComponent } from './filtercomponent/filtercomponent.component';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-servicelist',
  templateUrl: './servicelist.page.html',
  styleUrls: ['./servicelist.page.scss'],
})
export class ServicelistPage implements OnInit {

  public sort: any;

  public filterData: any;

  public categories: any = {};

  public updateFilter: boolean;

  constructor(private route: ActivatedRoute,
    private menu: MenuController,
    public popoverController: PopoverController,
    public modalController: ModalController,
    public loadingController: LoadingController,
    private toastCtrl: ToastController,
    public actionSheetController: ActionSheetController,
    public storage: Storage,
    private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.filterData = { 'title':'', 'category':'', 'subcategory':'', 'availability': [], 'city': '' };
    if(this.route.snapshot.queryParamMap['params']) {
      if(this.route.snapshot.queryParamMap['params'].type == 'category') {
        this.filterData.category = this.route.snapshot.queryParamMap['params'].category_id;
      }
    }
    this.storage.get('service_category').then((val) => {
      this.categories = val;
    });
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Sort By',
      buttons: [{
        text: 'Price - Low to High',
        cssClass: (this.sort == 'price-low') ? 'active': '',
        handler: () => {
          this.sort = "price-low";
        }
      }, {
        text: 'Price - High to Low',
        cssClass: (this.sort == 'price-high') ? 'active': '',
        handler: () => {
          this.sort = "price-high";
        }
      }, {
        text: 'Ascending Order A-Z',
        cssClass: (this.sort == 'asc') ? 'active': '',
        handler: () => {
          this.sort = "asc";
        }
      },{
        text: 'Descending Order Z-A',
        cssClass: (this.sort == 'desc') ? 'active': '',
        handler: () => {
          this.sort = "desc";
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
        }
      }]
    });
    await actionSheet.present();
  }

  async showFilter() {
    const modal = await this.modalController.create({
      component: FiltercomponentComponent,
      componentProps: {
        'type': 'filter',
        'post': this.filterData,
        'categories': this.categories,
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null && dataReturned.data != '') {
        this.filterData = dataReturned.data;
        this.updateFilter = !this.updateFilter;
        this.ref.detectChanges();
      }
    });

    return await modal.present();
  }

}
