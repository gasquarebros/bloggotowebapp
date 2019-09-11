import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { RestApiService } from '../rest-api.service';
import { LoginHeaderComponent } from '../share-module/login-header/login-header.component';
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
  public subHeader: any;

  constructor(
    public api: RestApiService,
    private route: ActivatedRoute,
    public authService: AuthService,
    public loadingController: LoadingController,
    public toastCtrl: ToastController) { }

  ngOnInit() {
    const queryParams: any = this.route.snapshot.queryParams;

    this.authService.getUserInfo().then(items => {
      this.userInfo = items;
    });
    this.products = [];
    this.subHeader = queryParams.title;
    let searchString  = '?app_id=' + this.appid;
    if (queryParams.type === 'subcat') {
      searchString += '&subcat=' + queryParams.subcategory;
    }
    this.fetchProducts(searchString);
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

  fetchProducts(queryparams) {
    this.api.getStaticData('productsapi/productslist' + queryparams, []).subscribe(result => {
      const res: any = result;
      if (res.body !== undefined) {
        const response = res.body;
        if (response.status === 'ok') {
          this.products = response.data.records;
        }
        this.loadingController.dismiss();
      }
    }, err => {
      console.log(err);
    });
  }

}
