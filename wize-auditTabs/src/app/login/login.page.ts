import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  caminho: String;
  public userLogin: User = {};

  constructor(private authService: AuthService, private router: Router, private navCtrl: NavController, private loadinController: LoadingController) { 
    this.caminho = "../../assets/logo-wize.png";
  }

  ngOnInit() {
  }

  async realizarLogin(){
    //console.log("Tentativa de login!");
 /*    this.loadinController.create({
      message: "Realizando login ...",
      duration: 3000,
    }).then(res => {
      res.present();
      res.onDidDismiss().then(dis=>{
        this.navCtrl.navigateRoot("tabs");
      })
    }); */

    console.log(this.userLogin);
    try{
      let user=await this.authService.login(this.userLogin);
      if(user){
        this.router.navigate(["tabs"]);
      }
      
    }catch(error){
      console.log(error);
    }
    //this.router.navigateByUrl("tabs");
  }
}
