import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService, Pedido } from '../shared/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.less']
})
export class PedidoComponent implements OnInit {
  model = new Pedido();
  @ViewChild('pedidoForm', {static: false}) pedidoForm: NgForm;
  formWasSent = false;
  sendingForm = false;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.sendingForm = true;
    this.dataService.savePedido(this.model).toPromise().then(response => {
      this.pedidoForm.reset();
      this.model = new Pedido();
      this.formWasSent = true;
      this.sendingForm = false;
    }).catch(reason => {
      console.error('reason', reason);
      this.formWasSent = false;
      this.sendingForm = false;
    });
  }
}
