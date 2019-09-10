import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { RestApiService } from 'src/app/rest-api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-common-services',
  templateUrl: './common-services.component.html',
  styleUrls: ['./common-services.component.scss'],
  providers: [AuthService]
})
export class CommonServicesComponent implements OnInit, OnChanges {


  @Input()
  public profileInfo: any;

  @Input()
  public profileView = false;

  @Input()
  public sort: any;

  @Input()
  public filterData: any;

  @Input()
  public updateFilter: boolean;

  public posts: any;
  public nextOffset: any;

  public appID: any;

  constructor(public loadingController: LoadingController,
    private api: RestApiService,
    public authService: AuthService,
    private router: Router,
    public toastCtrl: ToastController) { 

  }

  ngOnInit() {
    this.appID = 'Bloggoto';
    this.presentLoadingWithOptions();
    this.posts = [];
    this.fetchservices();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['sort'] !== undefined) {
      this.sort = changes['sort']['currentValue'];
      this.fetchservices();
    }
    if(changes['filterData'] !== undefined) {
      this.filterData = changes['filterData']['currentValue'];
      this.fetchservices();
    }
    if(changes['updateFilter'] != undefined) {
      this.fetchservices();
    }
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

  fetchservices(nextOffset = 0) {
    if(this.profileInfo != undefined && this.profileInfo !='') {
      this.api.getStaticData('profile/viewServices?userid=' + this.profileInfo.info.customer_id + '&offset = ' + nextOffset, []
      ).subscribe(result => {
        this.loadingController.dismiss();
        const response: any = result;
        if (response.body !== undefined) {
          const res = response.body;
          if (nextOffset > 0) {
            this.nextOffset = res.data.next_set;
            const morePosts = res.data.records;
            this.posts = this.posts.concat(morePosts);
          } else {
            this.posts = res.data.records;
            this.nextOffset = res.data.next_set;
          }
        }
        this.loadingController.dismiss();
      });
    } else {
      const queryparams = this.createRequest(nextOffset);
      this.api.getStaticData('restservices/servicelist'+ queryparams, []
      ).subscribe(result => {
        this.loadingController.dismiss();
        const response: any = result;
        if (response.body !== undefined) {
          const res = response.body;
          if (nextOffset > 0) {
            this.nextOffset = res.data.next_set;
            const morePosts = res.data.records;
            this.posts = this.posts.concat(morePosts);
          } else {
            this.posts = res.data.records;
            this.nextOffset = res.data.next_set;
          }
        }
        this.loadingController.dismiss();
      });
    }
  }

  createRequest(nextOffset) {

    let queryparams = '?app_id=' + this.appID + '&offset = ' + nextOffset;
    if(this.filterData.category != undefined && this.filterData.category !='') {
      queryparams += '&category='+this.filterData.category;
    }
    if(this.filterData.subcategory != undefined && this.filterData.subcategory !='') {
      queryparams += '&subcategory='+this.filterData.subcategory;
    }
    if(this.filterData.city != undefined && this.filterData.city !='') {
      queryparams += '&customer_city='+this.filterData.city;
    }
    if(this.filterData.availability != undefined && this.filterData.availability !='') {
      queryparams += '&availability='+this.filterData.availability;
    }
    if(this.filterData.title != undefined && this.filterData.title !='') {
      queryparams += '&search_field='+this.filterData.title;
    }
    if(this.sort != undefined && this.sort !='') {
      queryparams += '&sortby='+this.sort;
    }
    return queryparams;
  }

  ionRefresh(event, offset) {
    if (offset !== '') {
      if (offset !== undefined) {
        this.nextOffset = offset;
        this.fetchservices(offset);
      } else {
        this.fetchservices();
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

  gotoList(record){
    this.router.navigate(['/serviceview/' + record.ser_slug], {});
  }

  userProfile(customerid) {
    this.router.navigate(['/profile'], { queryParams: { customer: customerid } });
  }

}
