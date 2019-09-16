import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { Slides } from 'ionic-angular';

import { AuthService } from '../auth/auth.service';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import * as _ from 'underscore';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  @ViewChild('slideWithNav') slideWithNav: Slides;

  public userInfo: any;
  public categories: any;
  public appid: string = 'BloggotoApp';

  public sliderOne: any;

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 3,
    autoplay: true
  };

  constructor(
    public loadingController: LoadingController,
    private api: RestApiService,
    public authService: AuthService,
    public router: Router,
    private route: ActivatedRoute,
    private storage: Storage,
    public toastCtrl: ToastController) { }

  ngOnInit() {
    this.categories = [];
    const queryParams = this.route.snapshot.queryParams;
    this.authService.getUserInfo().then(items => {
      this.userInfo = items;
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
    this.api.getStaticData('productsapi/categories?app_id=' + this.appid, []).subscribe(result => {
      const res: any = result;
      if (res.body !== undefined) {
        const response = res.body;
        if (response.status === 'success') {
          this.categories = response.html.product_category;
          this.storage.set('product_cateogies', this.categories);
        }
        this.loadingController.dismiss();
      }
    }, err => {
      console.log(err);
    });
  }

  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

  redirectList(subcats) {
    // console.log(subcats.pro_subcate_id);
    this.router.navigateByUrl('/productlist?type=subcat&category=' + subcats.pro_subcate_category_primary_id + '&subcategory=' + subcats.pro_subcate_id + '&title=' + subcats.pro_subcate_name);
  }
}
