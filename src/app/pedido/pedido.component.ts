import { Component, OnInit } from '@angular/core';
import { DataService, Pedido } from '../shared/data.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.less']
})
export class PedidoComponent implements OnInit {
  model = new Pedido();
  submitted = false;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    console.log(this.dataService.test());
  }

  onSubmit() {
    this.submitted = true;

    this.dataService.savePedido(this.model).toPromise().then(response => {
      this.model = new Pedido();
      this.submitted = false;
    }).catch(reason => {
      console.log('reason', reason);
    });
  }
}
