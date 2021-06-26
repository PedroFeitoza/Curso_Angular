import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent implements OnInit {

  //Recebe valor de um outro componente
  @Input() valor: number = 0;

  //Externa o valor para outro componente
  @Output() mudouValor = new EventEmitter();

  //Observe variavel local do template(a variavel que começa com #)
  @ViewChild('campoInput', { static: true }) campoValorInput!: ElementRef;

  incrementa(){
    //this.valor++;
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    //this.valor--
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor});
  }


  constructor() { }

  ngOnInit(): void {
  }

}
