import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})

export class CursosComponent{

  cursos: string[]
  portal: string = "ESTUDANTES"

  constructor(private cursoService: CursosService)
  {
    this.cursos = cursoService.getCursos()
  }
}
