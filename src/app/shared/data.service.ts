import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    console.log(environment.apiUrl);
  }

  savePedido(pedido: Pedido) {
    return this.http.post(environment.apiUrl + '/pedido/guardar', pedido, { responseType: 'json' });
  }

  test() {
    return true;
  }
}

export class Pedido {
  idPedido: number = null;
  nombre: string;
  monto: number;
  descuento: number;
}
