import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rotas } from 'src/app/shared/route';
import { ToastrService } from 'ngx-toastr';
import { FormControl, Validators } from '@angular/forms';
import { ClientService } from 'src/app/shared/services/client/client.service';

@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.scss']
})
export class NovoClienteComponent implements OnInit {
  nomeControl = new FormControl(null, Validators.required);
  profissaoControl = new FormControl(null, Validators.required);
  constructor(private router: Router, private toastr: ToastrService, private clientService: ClientService) { }

  ngOnInit() {
  }
  cadastrar() {
    if (this.nomeControl.invalid || this.profissaoControl.invalid) {
      this.nomeControl.markAsDirty();
      this.nomeControl.markAsTouched();
      this.profissaoControl.markAsDirty();
      this.profissaoControl.markAsTouched();
      this.toastr.error('Formulário Inválido');
      return;
    }
    this.clientService.cadastrarCliente(this.nomeControl.value, this.profissaoControl.value).subscribe(() =>
      this.toastr.success('Cliente Cadastrado!'),
      err => this.toastr.error(err));
    
  }
  voltar() {
    this.router.navigate([Rotas.PAINEL_CLIENTES])
  }
}
