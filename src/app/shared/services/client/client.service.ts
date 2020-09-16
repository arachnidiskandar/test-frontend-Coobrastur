import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../../api';
import { ThrowStmt } from '@angular/compiler';
export interface Client {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
export interface ResponseClient {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Client[];
}

export interface UserCrated {
  name: string;
  job: string;
  id: string;
  createdAt: string;
}


@Injectable({
  providedIn: 'root'
})

export class ClientService {

  constructor(private http: HttpClient) { }

  listarTodosClientes(page: number): Observable<ResponseClient> {
    return this.http.get<ResponseClient>(`${API.CLIENT}?page=${page}`);
  }
  cadastrarCliente(nome: string, profissao: string): Observable<unknown> {
    return this.http.post(API.CLIENT, {name: nome, job: profissao});
  }

}
