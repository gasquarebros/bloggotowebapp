import { Component, OnInit, Input } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { RestApiService } from 'src/app/rest-api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-common-products',
  templateUrl: './common-products.component.html',
  styleUrls: ['./common-products.component.scss'],
  providers: [AuthService]
})
export class CommonProductsComponent implements OnInit {

  public userInfo: any;
  public products: any;
  public appid: string = 'BloggotoApp';
  public productCount: number = 0;
  public nextOffset: number = 0;
  

  @Input()
  public isProfilePage = false;

  @Input()
  public profileInfo: any;

  public posts: any;
  
  constructor(public loadingController: LoadingController,
    private api: RestApiService,
    private route: ActivatedRoute,
    public authService: AuthService,
    private router: Router,
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
          this.productCount = res.data.total_rows;
          this.nextOffset = res.data.next_set;
          const morePosts = res.data.records;
          this.products = this.products.concat(morePosts);
        } else {
          this.products = res.data.records;
          this.productCount = res.data.total_rows;
          this.nextOffset = res.data.next_set;
        }
      }
      this.loadingController.dismiss();
    });
  }

  
  viewProduct(slug) {
    this.router.navigate(['/productview'], { queryParams: { slug: slug } });
    
  }

  
  ionRefresh(event, offset) {
    if (offset !== '') {
      if (offset !== undefined) {
       this.fetchProducts(offset);
      } else {
        this.fetchProducts();
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

}
