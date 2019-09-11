import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastController, LoadingController, NavController  } from '@ionic/angular';
import { Router } from '@angular/router';

import { LoginHeaderComponent } from '../share-module/login-header/login-header.component';
import { CommonServicesComponent } from '../share-module/common-services/common-services.component';
import { AuthService } from '../auth/auth.service';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'underscore';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})

export class ServicesPage implements OnInit {

  public userInfo: any;
  public categories: any;
  public appid: string = 'BloggotoApp';

  @ViewChild('myNav') nav: NavController

  constructor(
    public loadingController: LoadingController, 
    private api: RestApiService,
    public authService: AuthService, 
    private route: ActivatedRoute, 
    public toastCtrl: ToastController, 
    public router: Router,
    public navCtrl: NavController,
    private storage: Storage) { }

  ngOnInit() {
    this.categories = [];
    const queryParams = this.route.snapshot.queryParams;
    this.authService.getUserInfo().then(items => {
      this.userInfo = items;
      // if (queryParams !== undefined && queryParams.customer != undefined && queryParams.customer != '') {
      // }
      this.categories = [];
      this.fetchCategories();
    });
    this.getMasterData();
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

  fetchCategories() {
    this.api.getStaticData('restservices/categories?app_id=' + this.appid, []).subscribe(result => {
      const res: any = result;
      if (res.body !== undefined) {
        const response = res.body;
        if (response.status === 'success') {
          this.categories = response.html;
          this.storage.set('service_category', this.categories);
        }
        this.loadingController.dismiss();
      }
    }, err => {
      console.log(err);
    });
  }

  loadService(cat) {
    this.navCtrl.navigateRoot(['servicelist'], { queryParams: { 'type': 'category', 'category_id': cat.ser_cate_primary_id }});
    //this.router.navigate(['/servicelist', ], { queryParams: { 'type': 'category', 'category_id': cat.ser_cate_primary_id } });
  }

  getMasterData() {
    this.storage.get('service_subcategory').then((val) => {
      console.log(val);
      if(val == null) {
        this.fetchsubcategories();
      }
    });
    this.storage.get('country').then((val) => {
      if(val == null) {
        const data = '/countries?type=all';
        this.authService.fetchMasterData(data);
      } else {
        const data = '/countries?type=state';
        this.storage.get('state').then((val) => {
          if(val == null) {
            this.authService.fetchMasterData(data);
          }
        });
        const cdata = '/countries?type=city';
        this.storage.get('city').then((val) => {
          if(val == null) {
            this.authService.fetchMasterData(cdata);
          }
        });
      }
    });
  }

  fetchsubcategories() {
    this.api.getStaticData('restservices/subcategories?app_id=' + this.appid, []).subscribe(result => {
      const res: any = result;
      if (res.body !== undefined) {
        const response = res.body;
        if (response.status === 'success') {
          this.storage.set('service_subcategory', response.html);
        }
      }
    }, err => {
      console.log(err);
    });
  }

}
