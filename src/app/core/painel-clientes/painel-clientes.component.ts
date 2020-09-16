import { Component, OnInit } from '@angular/core';
import { ClientService, Client, ResponseClient } from 'src/app/shared/services/client/client.service';

@Component({
  selector: 'app-painel-clientes',
  templateUrl: './painel-clientes.component.html',
  styleUrls: ['./painel-clientes.component.scss']
})
export class PainelClientesComponent implements OnInit {
  listaClientes: Client[];
  response: ResponseClient;
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getLista(1);
  }
  getLista(pagina: number) {
    this.clientService.listarTodosClientes(pagina).subscribe(res => {
      this.response = res;
      this.listaClientes = res.data
    });
  }

}
