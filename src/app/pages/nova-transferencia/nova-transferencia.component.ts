import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Transferencia } from 'src/app/models/Transferencia';
import { TransferenciaService } from 'src/app/services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {
  valor: number = 0;
  destino: number = 0;

  constructor(private transferenciaService: TransferenciaService) {}

  ngOnInit() {}

  @Output() aoTransferir = new EventEmitter<any>();

  transferir(): void {
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};

    this.transferenciaService.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
    },
    error => {
      console.warn(error);
    });
  }

  limparCampos(): void {
    this.valor = 0;
    this.destino = 0;
  }
}
