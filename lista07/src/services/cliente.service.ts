import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  apiUrl: string = 'http://localhost:3000/clientes';

  constructor() {}

  getClientes() {
    return fetch(this.apiUrl).then((res) => res.json());
  }
  getCliente(id: number) {
    return fetch(`${this.apiUrl}/${id}`).then((res) => res.json());
  }
  setCliente(cliente: any) {
    return fetch(this.apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cliente),
    }).then((res) => res.json());
  }

  updateCliente(id: number, cliente: any) {
    return fetch(`${this.apiUrl}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cliente),
    }).then((res) => res.json());
  }

  deleteCliente(id: number) {
    return fetch(`${this.apiUrl}/${id}`, {
      method: 'DELETE',
    }).then((res) => res.json());
  }
}
