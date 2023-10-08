import { CursoService } from './../../../services/curso.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/Curso';

@Component({
  selector: 'app-componente-cursos-agendados',
  templateUrl: './componente-cursos-agendados.component.html',
  styleUrls: ['./componente-cursos-agendados.component.css'],
})
export class ComponenteCursosAgendadosComponent implements OnInit {
  cursos: Curso[] = [];

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    this.cursoService.listarCursos().subscribe((cursos) => {
      this.cursos = cursos;
    });
  }
}
