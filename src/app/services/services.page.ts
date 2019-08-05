import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';

import { LoginHeaderComponent } from '../share-module/login-header/login-header.component';
import { CommonServicesComponent } from '../share-module/common-services/common-services.component';
import { AuthService } from '../auth/auth.service';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'underscore';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})

export class ServicesPage implements OnInit {

  public userInfo: any;
  public categories: any;
  public appid: string = 'BloggotoApp';

  constructor(public loadingController: LoadingController, private api: RestApiService,
    public authService: AuthService, private route: ActivatedRoute, public toastCtrl: ToastController) { }

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
        }
        this.loadingController.dismiss();
      }
    }, err => {
      console.log(err);
    });
  }

  loadService(cat) {

  }

}
