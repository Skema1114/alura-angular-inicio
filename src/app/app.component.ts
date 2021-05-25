import { Component } from '@angular/core';

interface Transferencia {
  valor?: number,
  destino?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'bytebank';

  transferencia: Transferencia = {};


  transferir($event: object) {
    this.transferencia = $event;
  }
}

