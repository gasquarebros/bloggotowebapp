import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController, ModalController } from '@ionic/angular';
import { RestApiService } from 'src/app/rest-api.service';
import { AuthService } from 'src/app/auth/auth.service';
import * as _ from 'underscore';
import { Storage } from '@ionic/storage';
import { BookserviceComponent } from './bookservice/bookservice.component';

@Component({
  selector: 'app-serviceview',
  templateUrl: './serviceview.page.html',
  styleUrls: ['./serviceview.page.scss'],
})
export class ServiceviewPage implements OnInit {

  public appID: any;
  public slug: any = '';
  public posts: any =[];
  public slideOpts: any;
  public overallCities: any = [];
  public userInfo: any;

  constructor(public loadingController: LoadingController,
    private api: RestApiService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    public toastCtrl: ToastController,
    private modalController: ModalController,
    private storage: Storage) { }

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.appID = 'Bloggoto';
    this.presentLoadingWithOptions();
    this.posts = [];
    this.fetchservices();

    this.slideOpts = {
      initialSlide: 0,
      speed: 400,
      autoplay:true
    };

    const cdata = '/countries?type=city';
    this.storage.get('city').then((val) => {
      if(val == null) {
        this.authService.fetchMasterData(cdata);
        this.storage.get('city').then((val) => {
          this.overallCities = val;
        });
      } else {
        this.overallCities = val;
      }
    });

    this.authService.getUserInfo().then(items => {
      this.userInfo = items;
    });
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

  fetchservices() {

    let queryparams = '?app_id=' + this.appID;
      if(this.slug != undefined && this.slug !='') {
        queryparams += '&slug='+this.slug;
      }
      this.api.getStaticData('restservices/servicelist'+ queryparams, []
      ).subscribe(result => {
        const response: any = result;
        if (response.body !== undefined) {
          const res = response.body;
          this.posts = (res.data.records.length > 0)?res.data.records[0]: []; 
          let availability = (this.posts.ser_available !='') ? this.posts.ser_available.split(','): [];
          this.posts.availability = availability.filter(function (el) {
            return (el != null && el!= "");
          });
          let filteredCities = [];
          _.each(this.posts.cities, (cty: any) => {
              let findCity: any = _.findWhere(this.overallCities, {city_id: cty});
              if(findCity.city_name != undefined) {
                filteredCities.push(findCity.city_name);
              }
          });
          this.posts.cities = filteredCities;
          // filteredCities
        }
        this.loadingController.dismiss();
      });
  }

  userProfile(customerid) {
    this.router.navigate(['/profile'], { queryParams: { customer: customerid } });
  }

  redirectLogin() {
    this.router.navigate(['/login']);
  }


  async showFilter(posts) {
    this.presentLoadingWithOptions();
    const modal = await this.modalController.create({
      component: BookserviceComponent,
      componentProps: {
        'posts': posts
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null && dataReturned.data != '' && dataReturned.data != undefined) {
        /*this.filterData = dataReturned.data;
        this.updateFilter = !this.updateFilter;
        this.ref.detectChanges();*/
      }
    });

    return await modal.present();
  }

}
