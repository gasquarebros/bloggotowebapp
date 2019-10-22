import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ToastController, ActionSheetController, PopoverController, LoadingController } from '@ionic/angular';
import { LoginHeaderComponent } from '../share-module/login-header/login-header.component';
import { AuthService } from '../auth/auth.service';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-managebookings',
  templateUrl: './managebookings.page.html',
  styleUrls: ['./managebookings.page.scss'],
  providers: [AuthService]
})
export class ManagebookingsPage implements OnInit {

  public userInfo: any = null;

  constructor(private menu: MenuController,
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

  ionRefresh(event, offset) {
    if (offset !== '') {
      if (offset !== undefined) {
        /*this.pageOffset = offset;
        console.log('ionrefresh Event Triggered!');
        this.loadFetchPosts();*/
      } else {
        /*if (this.isProfileType === 'draft') {
          this.fetchDraft();
        } else if (this.isProfileType === 'favourite') {
          this.fetchfavourite();
        } else {
          this.fetchPosts();
        }*/
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
