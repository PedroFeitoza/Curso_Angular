import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-for',
  templateUrl: './diretiva-ng-for.component.html',
  styleUrls: ['./diretiva-ng-for.component.scss']
})
export class DiretivaNgForComponent implements OnInit {


  cursos: string[] = ["Angular 2", "Java", "Phonegap"];

  constructor() { }

  ngOnInit() {
    for (let i=0; i<this.cursos.length; i++){
      let curso = this.cursos[i];
    }
  }

}
