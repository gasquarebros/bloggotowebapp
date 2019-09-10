import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { RestApiService } from 'src/app/rest-api.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-serviceview',
  templateUrl: './serviceview.page.html',
  styleUrls: ['./serviceview.page.scss'],
})
export class ServiceviewPage implements OnInit {

  public appID: any;
  public slug: any = '';
  public posts: any =[];

  constructor(public loadingController: LoadingController,
    private api: RestApiService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    public toastCtrl: ToastController) { }

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.appID = 'Bloggoto';
    this.presentLoadingWithOptions();
    this.posts = [];
    this.fetchservices();
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
        }
        this.loadingController.dismiss();
      });
  }

}
