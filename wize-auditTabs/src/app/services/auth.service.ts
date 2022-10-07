import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  constructor(private afa: AngularFireAuth) { }
  login(usuario: User){
    return this.afa.auth.signInWithEmailAndPassword(usuario.email,usuario.password);
  }
  cadastro(usuario:User){
    return this.afa.auth.createUserWithEmailAndPassword(usuario.email,usuario.password);
  }

  logout(){
    return this.afa.auth.signOut();
  }

  getAuth(){
    return this.afa.auth;
  }
}
