import { Component, OnInit, Input } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { RestApiService } from 'src/app/rest-api.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-common-products',
  templateUrl: './common-products.component.html',
  styleUrls: ['./common-products.component.scss'],
  providers: [AuthService]
})
export class CommonProductsComponent implements OnInit {

  @Input()
  public isProfilePage = false;

  @Input()
  public profileInfo: any;

  public posts: any;
  public nextOffset: any;

  constructor(public loadingController: LoadingController,
    private api: RestApiService,
    public authService: AuthService,
    public toastCtrl: ToastController) { }

  ngOnInit() {
    this.presentLoadingWithOptions();
    this.fetchProducts();
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

  fetchProducts(nextOffset = 0) {
    this.api.getStaticData('profile/viewProducts?userid=' + this.profileInfo.info.customer_id + '&offset = ' + nextOffset, []
    ).subscribe(result => {
      const response: any = result;
      if (response !== undefined) {
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
