import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/shared/services/client/client.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  @Input() client: Client;
  constructor() { }

  ngOnInit() {
  }

  editar(id: number) {
    
  }
}
