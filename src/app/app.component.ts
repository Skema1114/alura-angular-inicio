import { Component } from '@angular/core';
import { Transferencia } from '../Models/Transferencia';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'bytebank'
  transferencias: Transferencia[] = [];

  transferir($event: object) {
    let data = new Date();
    let transferencia = {...$event, data: `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`};

    this.transferencias.push(transferencia);
  }
}

