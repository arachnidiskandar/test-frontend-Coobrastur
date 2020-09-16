import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rotas } from 'src/app/shared/route';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailControl = new FormControl(null, Validators.required);
  senhaControl = new FormControl(null, Validators.required);
  constructor(private router: Router, private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit() {
  }
  
  login() {
    if (this.emailControl.invalid || this.senhaControl.invalid) {
      this.toastr.error('Formulário Inválido');
      return;
    }
    this.authService.logar();
    this.router.navigate([Rotas.PAINEL_CLIENTES])
  }
}
