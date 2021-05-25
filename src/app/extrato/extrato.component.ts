import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaService } from 'src/services/transferencia.service';
import { Transferencia } from '../../Models/Transferencia';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias: Transferencia[] = [];

  constructor(private transferenciaService: TransferenciaService) {}

  ngOnInit() {
    this.transferencias = this.transferenciaService.transferencias;
  }
}
