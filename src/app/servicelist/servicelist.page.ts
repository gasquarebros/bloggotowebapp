import { Component, OnInit } from '@angular/core';
import { CommonServicesComponent } from '../share-module/common-services/common-services.component';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { MenuController, PopoverController, ModalController, LoadingController, ToastController } from '@ionic/angular';
import { FiltercomponentComponent } from './filtercomponent/filtercomponent.component';


@Component({
  selector: 'app-servicelist',
  templateUrl: './servicelist.page.html',
  styleUrls: ['./servicelist.page.scss'],
})
export class ServicelistPage implements OnInit {

  public category: any;

  public sort: any;

  constructor(private route: ActivatedRoute,
    private menu: MenuController,
    public popoverController: PopoverController,
    public modalController: ModalController,
    public loadingController: LoadingController,
    private toastCtrl: ToastController,
    public actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.category = '';
    if(this.route.snapshot.queryParamMap['params']) {
      if(this.route.snapshot.queryParamMap['params'].type == 'category') {
        this.category = this.route.snapshot.queryParamMap['params'].category_id;
      }
    }
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
    const data = [];
    const modal = await this.modalController.create({
      component: FiltercomponentComponent,
      componentProps: {
        'type': 'filter',
        'post': data,
      }
    });
    return await modal.present();
  }

}
