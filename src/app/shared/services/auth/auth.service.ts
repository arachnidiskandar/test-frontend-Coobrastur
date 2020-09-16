import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logado = false;
  constructor() { }

  logar() {
    this.logado = true;
  }

  logout() {
    this.logado = false;
  }
}
