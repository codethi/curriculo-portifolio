import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  icones(){
    let icon = environment.icon
    return icon
  }

  titulos(){
    let titulo = environment.titulo
    if(titulo == ''){
      titulo = 'Sobre mim'
    }
    return titulo
  }
}
