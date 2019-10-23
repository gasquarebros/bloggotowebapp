import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import { Events, MenuController } from '@ionic/angular';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';

import { StaticPage } from './static/static.page';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [Events, Deeplinks]
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  public userInfo: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public authService: AuthService,
    public router: Router,
    public events: Events,
    public menuCtrl: MenuController,
    private deeplinks: Deeplinks
  ) {
    this.initializeApp();
    this.events.subscribe('user:login', () => {
      this.loggedIn();
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.authService.getUserInfo().then(items => {
        this.userInfo = items;
      });

      
    });

    // Convenience to route with a given nav
    this.deeplinks.route({
      '/about-us': StaticPage,
    }).subscribe(match => {
      // match.$route - the route we matched, which is the matched entry from the arguments to route()
      // match.$args - the args passed in the link
      // match.$link - the full link data
      console.log('Successfully matched route', match);
    }, nomatch => {
      // nomatch.$link - the full link data
      console.error('Got a deeplink that didn\'t match', nomatch);
    });


  }

  loggedIn() {
    console.log('logged inn');
    setTimeout(() => {
      this.authService.getUserInfo().then(items => {
        this.userInfo = items;
        console.log(this.userInfo);
      });
    }, 100);
  }
  logout() {
    this.menuCtrl.close('content1');
    this.authService.removeUserInfo();
    this.router.navigateByUrl('/login');
  }
  profile() {
    this.menuCtrl.close('content1');
  }
  draftRedirect(type) {
    this.menuCtrl.close('content1');
    this.router.navigateByUrl('/draft-posts?type=' + type);
  }


}
