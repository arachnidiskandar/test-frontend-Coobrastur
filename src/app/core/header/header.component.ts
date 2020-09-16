import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rotas } from 'src/app/shared/route';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  redirectToNovoCliente() {
    this.router.navigate([Rotas.NOVO_CLIENTE]);
  }
  logout() {
    this.authService.logout();
    this.router.navigate([Rotas.LOGIN]);
  }
}
