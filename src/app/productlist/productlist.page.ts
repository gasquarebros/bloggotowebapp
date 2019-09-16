import { Component, OnInit } from '@angular/core';
import { MenuController, PopoverController, ModalController, LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { RestApiService } from '../rest-api.service';
import { ActionSheetController } from '@ionic/angular';
import { LoginHeaderComponent } from '../share-module/login-header/login-header.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.page.html',
  styleUrls: ['./productlist.page.scss'],
  providers: [AuthService]
})
export class ProductlistPage implements OnInit {

  public userInfo: any;
  public products: any;
  public appid: string = 'BloggotoApp';
  public productCount: number = 0;
  public nextOffset: number = 0;
  public subHeader: any;
  public sort: any;
  public filterData: any = {};

  constructor(
    private menu: MenuController,
    public popoverController: PopoverController,
    public modalController: ModalController,
    public loadingController: LoadingController,
    private toastCtrl: ToastController,
    public api: RestApiService,
    private route: ActivatedRoute,
    public authService: AuthService,
    private router: Router,
    public actionSheetController: ActionSheetController) { }

  ngOnInit() {
    const queryParams: any = this.route.snapshot.queryParams;

    this.authService.getUserInfo().then(items => {
      this.userInfo = items;
    });
    this.filterData = { 'title':'', 'cat':'', 'subcat':'', 'price_from': '', 'price_to': '' };
    this.products = [];
    this.subHeader = (queryParams.title)?queryParams.title:'Products';
    let searchString  = '?app_id=' + this.appid;
    if (queryParams.type === 'subcat') {
      this.filterData.cat = queryParams.category;
      this.filterData.subcat = queryParams.subcategory;
    }
    this.fetchProducts();
    this.presentLoadingWithOptions();
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: 'circles',
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  async presentToastWithOptions(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      showCloseButton: true,
      duration: 5000,
      position: 'bottom',
      closeButtonText: 'Done'
    });
    toast.present();
  }

  createRequestObject() {
    let searchString  = '?app_id=' + this.appid;
    
    if (this.filterData.title != '') {
      searchString += '&search=' + this.filterData.title;
    }
    if (this.filterData.subcat != '') {
      searchString += '&subcat=' + this.filterData.subcat;
    }
    if (this.filterData.cat != '') {
      searchString += '&cat=' + this.filterData.cat;
    }
    if (this.filterData.price_from != '') {
      searchString += '&price_from=' + this.filterData.price_from;
    }
    if (this.filterData.price_to != '') {
      searchString += '&price_to=' + this.filterData.price_to;
    }
    if(this.sort !='') {
      searchString += '&sortby = '+ this.sort;
    }
    return searchString;
  }

  fetchProducts() {
    this.productCount = 0;
    const queryparams = this.createRequestObject();
    this.api.getStaticData('productsapi/productslist' + queryparams, []).subscribe(result => {
      const res: any = result;
      if (res.body !== undefined) {
        const response = res.body;
        if (response.status === 'ok') {
          this.products = response.data.records;
          this.productCount = response.data.total_rows;
          this.nextOffset = response.data.next_set;
        }
        this.loadingController.dismiss();
      }
    }, err => {
      console.log(err);
    });
  }



  
  ionRefresh(event, offset) {
    if (offset !== '') {
      if (offset !== undefined) {
       this.fetchProducts();
      } else {
        this.fetchProducts();
      }
      setTimeout(() => {
        event.target.complete();
      }, 2000);
    } else {
      event.target.complete();
    }
  }
  ionPull(event) {
    console.log('ionPull Event Triggered!');
  }
  ionStart(event) {
    console.log('ionStart Event Triggered!');
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Sort By',
      buttons: [{
        text: 'Price - Low to High',
        cssClass: (this.sort == 'price-low') ? 'active': '',
        handler: () => {
          this.nextOffset = 0;
          this.sort = "price-low";
          this.fetchProducts();
        }
      }, {
        text: 'Price - High to Low',
        cssClass: (this.sort == 'price-high') ? 'active': '',
        handler: () => {
          this.nextOffset = 0;
          this.sort = "price-high";
          this.fetchProducts();
        }
      }, {
        text: 'Ascending Order A-Z',
        cssClass: (this.sort == 'asc') ? 'active': '',
        handler: () => {
          this.nextOffset = 0;
          this.sort = "asc";
          this.fetchProducts();
        }
      },{
        text: 'Descending Order Z-A',
        cssClass: (this.sort == 'desc') ? 'active': '',
        handler: () => {
          this.nextOffset = 0;
          this.sort = "desc";
          this.fetchProducts();
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
    this.presentLoadingWithOptions();
    const modal = await this.modalController.create({
      component: ProductFilterComponent,
      componentProps: {
        'type': 'filter',
        'post': this.filterData,
        //'categories': this.categories,
        //'subcategories': this.subcategories,
        //'countries': this.countries,
        //'states': this.states,
        //'cities': this.filteredCities,
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null && dataReturned.data != '' && dataReturned.data != undefined) {
        this.nextOffset = 0;
        /*this.filterData = dataReturned.data;
        this.updateFilter = !this.updateFilter;
        this.ref.detectChanges();*/
        this.fetchProducts();
      }
    });

    return await modal.present();
  }

  goBack() {
    this.router.navigateByUrl('/products');
  }

}
