import { Component } from '@angular/core';

import { Platform,  LoadingController, NavController,ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  private loading: any;
  constructor(
    private platform: Platform,
    private loadingController: LoadingController,
    private navController: NavController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private toastController: ToastController
  ) {
    this.initializeApp();
  }
  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: "Saind ..."
    })
    return this.loading.present();
  }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
  async doLogout(){
    await this.presentLoading();
    try {
      await this.authService.logout();
    } catch (error) {
      console.log(error);
      this.presentToast(error);
    } finally {
      this.loading.dismiss();
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
