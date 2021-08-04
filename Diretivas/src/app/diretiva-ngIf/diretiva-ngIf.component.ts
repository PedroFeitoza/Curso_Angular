import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngIf',
  templateUrl: './diretiva-ngIf.component.html',
  styleUrls: ['./diretiva-ngIf.component.scss']
})
export class DiretivaNgIfComponent implements OnInit {

  constructor() { }

  cursos: string[] = ["Angular 2"];

  mostrarCursos: boolean = false;

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }

  ngOnInit() {
  }

}
