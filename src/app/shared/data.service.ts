import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";

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

  getPedido(idPedido: number): Observable<Pedido> {
    return this.http.get<Pedido>(environment.apiUrl + '/pedido');
  }
}

export class Pedido {
  idPedido: number = null;
  nombre: string;
  monto: number;
  descuento: number;
}
