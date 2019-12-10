import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.less']
})
export class PedidoComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log(this.dataService.test());
  }

}
