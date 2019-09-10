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
  public category: any;

  @Input()
  public sort: any;

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
      let queryparams = '?app_id=' + this.appID + '&offset = ' + nextOffset;
      if(this.category != undefined && this.category !='') {
        queryparams += '&category='+this.category;
      }
      if(this.sort != undefined && this.sort !='') {
        queryparams += '&sortby='+this.sort;
      }
      this.api.getStaticData('restservices/servicelist'+ queryparams, []
      ).subscribe(result => {
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
