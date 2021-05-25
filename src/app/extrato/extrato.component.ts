import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../../Models/Transferencia';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  @Input() transferencias: Transferencia[] = [];

  constructor() {}

  ngOnInit() {}
}
