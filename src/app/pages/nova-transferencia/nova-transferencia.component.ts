import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {
  valor: number = 0;
  destino: number = 0;

  constructor() {}

  ngOnInit() {}

  @Output() aoTransferir = new EventEmitter<any>();

  transferir() {
    const valorEmitir = {valor: this.valor, destino: this.destino};

    this.aoTransferir.emit(valorEmitir);
    this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
