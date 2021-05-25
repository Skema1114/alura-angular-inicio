import { Component } from '@angular/core';
import { TransferenciaService } from 'src/services/transferencia.service';
import { Transferencia } from '../Models/Transferencia';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'bytebank'
  transferencias: Transferencia[] = [];

  constructor(private transferenciaService: TransferenciaService) {}

  transferir($event: object) {
    this.transferenciaService.adicionar($event);
  }
}

