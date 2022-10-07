import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  userCadastro: User={};

  ngOnInit() {
  }


  async realizarCadastro(){
    console.log(this.userCadastro);
    try{
      let user=await this.authService.cadastro(this.userCadastro);
      if(user){
        this.router.navigate(["tabs"]);
      }
      
    }catch(error){
      console.log(error);
    }
  }
}
