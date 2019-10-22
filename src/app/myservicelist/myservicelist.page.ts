import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ToastController, ActionSheetController, PopoverController, LoadingController } from '@ionic/angular';
import { LoginHeaderComponent } from '../share-module/login-header/login-header.component';
import { AuthService } from '../auth/auth.service';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-myservicelist',
  templateUrl: './myservicelist.page.html',
  styleUrls: ['./myservicelist.page.scss'],
  providers: [AuthService]
})
export class MyservicelistPage implements OnInit {

  public userInfo: any = null;

  constructor(
    private menu: MenuController,
    public api: RestApiService,
    private router: Router,
    public authService: AuthService,
    private toastCtrl: ToastController,
    public loadingController: LoadingController,
    public actionSheetController: ActionSheetController,
    public popoverController: PopoverController) { }

  ngOnInit() {
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

  async presentActionSheet() {
    /*
    const actionSheet = await this.actionSheetController.create({
      header: 'Sort By',
      buttons: [{
        text: 'Price - Low to High',
        cssClass: (this.sort == 'price-low') ? 'active': '',
        handler: () => {
          this.sort = "price-low";
        }
      }, {
        text: 'Price - High to Low',
        cssClass: (this.sort == 'price-high') ? 'active': '',
        handler: () => {
          this.sort = "price-high";
        }
      }, {
        text: 'Ascending Order A-Z',
        cssClass: (this.sort == 'asc') ? 'active': '',
        handler: () => {
          this.sort = "asc";
        }
      },{
        text: 'Descending Order Z-A',
        cssClass: (this.sort == 'desc') ? 'active': '',
        handler: () => {
          this.sort = "desc";
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
        }
      }]
    });
    await actionSheet.present();*/
  }

  async showFilter() {
    this.presentLoadingWithOptions();
  }

  addService() {
    // this.router.navigate(['/questions/thankyou'], { queryParams: { percent: '90' , participationId: 1, language: this.questionLanguage} });
    this.router.navigate(['/myservicelist/addservice']);
  }

}
