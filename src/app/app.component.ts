import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';
import { Transferencia } from './models/Transferencia';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'bytebank'
  transferencias: Transferencia[] = [];

  constructor(private transferenciaService: TransferenciaService) {}
}

