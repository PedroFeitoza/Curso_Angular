import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  texto: string = 'Propriedade da Classe';
  url: string = 'http://lorempixel.com/400/200/';
  getValor()
  {
    return 10;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
