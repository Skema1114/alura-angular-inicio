import { Injectable } from '@angular/core';
import { Transferencia } from '../models/Transferencia';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTrasnferencias: Transferencia[];
  private baseUrl = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTrasnferencias = []
  }

  get transferencias(): Transferencia[] {
    return this.listaTrasnferencias;
  }

  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.baseUrl);
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.incrementar(transferencia);

    return this.httpClient.post<Transferencia>(this.baseUrl, transferencia);
  }

  private incrementar(transferencia: Transferencia): void {
    transferencia.data = new Date();
  }
}
