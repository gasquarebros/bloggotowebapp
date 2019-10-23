import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController, ModalController } from '@ionic/angular';
import { RestApiService } from 'src/app/rest-api.service';
import { AuthService } from 'src/app/auth/auth.service';
import * as _ from 'underscore';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.page.html',
  styleUrls: ['./productview.page.scss'],
})
export class ProductviewPage implements OnInit {

  public appID: any;
  public slug: any = '';
  public posts: any =[];
  public slideOpts: any;
  public attributes: any = [];
  public shippingMethods: any = [];
  public gallery: any = [];
  public userInfo: any;
  public shippingMethod: any;
  public selectedAttribure: any = [];

  public price: any;
  public product_special_price: any;
  

  constructor(public loadingController: LoadingController,
    private api: RestApiService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    public toastCtrl: ToastController,
    private modalController: ModalController,
    private storage: Storage) { }

  ngOnInit() {
    this.price = 0;
    this.product_special_price = 0;
    this.shippingMethod = '';
    this.selectedAttribure = [];
    this.authService.getUserInfo().then(items => {
      this.userInfo = items;
    });

    const queryParams: any = this.route.snapshot.queryParams;
    this.slug = queryParams.slug;
    this.appID = 'Bloggoto';
    this.presentLoadingWithOptions();
    this.posts = [];
    this.fetchProducts();

    this.slideOpts = {
      initialSlide: 0,
      speed: 400,
      autoplay:true
    };

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

  fetchProducts() {
    this.gallery = [];
    this.shippingMethods = [];
    this.attributes = [];
    this.posts = [];

    let queryparams = '?app_id=' + this.appID;
      if(this.slug != undefined && this.slug !='') {
        queryparams += '&slug='+this.slug;
      }
      this.api.getStaticData('productsapi/productview'+ queryparams, []
      ).subscribe(result => {
        const response: any = result;
        if (response.body !== undefined) {
          const res = response.body;
          this.posts = (res.data.records.length > 0)?res.data.records[0]: []; 
          this.attributes = res.data.assigned_associate_attributes;
          this.shippingMethods = res.data.assigned_shipping;
          this.gallery = res.data.gallery_images;
          this.price = this.posts.product_price;
          this.product_special_price = this.posts.product_special_price;
        }
        this.loadingController.dismiss();
      });
  }

  userProfile(customerid) {
    this.router.navigate(['/profile'], { queryParams: { customer: customerid } });
  }

  getSelectedAttributeValue(attribute) {
    if(this.selectedAttribure.length > 0) {
      const data = this.selectedAttribure.find(ob => (ob.attributeID === attribute.pro_modifier_id ));
      return data.valueName;
    } else {
      return "";
    }
  }

  getActive(attributeID, valueID) {
    if(this.selectedAttribure.length > 0) {
      const data = this.selectedAttribure.find(ob => (ob.attributeID === attributeID && ob.valueID === valueID));
      if(data == null) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  selectAttribute(attribute, index) {
    let pushed = false;
    if(this.selectedAttribure.length > 0) {
      const data = _.findIndex(this.selectedAttribure, (obj: any) => {
        return obj.attributeID == attribute.pro_modifier_id;
      });
      if(data >= 0) {
        this.selectedAttribure[data].valueID = attribute.values.primary_ids[index];
        this.selectedAttribure[data].valueName = attribute.values.names[index];
      } else {
        pushed = true;
      }
    } else {
      pushed = true;
    }

    if(pushed == true) {
      this.selectedAttribure.push({
        attributeID: attribute.pro_modifier_id,
        attributeName: attribute.pro_modifier_name,
        valueID: attribute.values.primary_ids[index],
        valueName: attribute.values.names[index]
      });
    }
  }


}
