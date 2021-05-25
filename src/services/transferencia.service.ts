import { Injectable } from '@angular/core';
import { Transferencia } from 'src/Models/Transferencia';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTrasnferencias: Transferencia[];

constructor() {
  this.listaTrasnferencias = []
}

get transferencias() {
  return this.listaTrasnferencias;
}

adicionar(transferencia: Transferencia) {
  this.incrementar(transferencia);
  this.listaTrasnferencias.push(transferencia);
}

private incrementar(transferencia: Transferencia) {
  transferencia.data = new Date();
}

}
