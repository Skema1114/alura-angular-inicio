import { Component, OnInit } from '@angular/core';
import { TransferenciaService } from '../../services/transferencia.service';
import { Transferencia } from '../../models/Transferencia';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias: Transferencia[] = [];

  constructor(private transferenciaService: TransferenciaService) {}

  ngOnInit() {
    this.transferenciaService.todas().subscribe((transferencia: Transferencia[]) => {
      console.table(transferencia);
    this.transferencias = transferencia;
    })
  }
}
