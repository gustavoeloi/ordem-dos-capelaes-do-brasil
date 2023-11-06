import { CursoService } from './../../../services/curso.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/model/Curso';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-componente-cursos-agendados',
  templateUrl: './componente-cursos-agendados.component.html',
  styleUrls: ['./componente-cursos-agendados.component.css'],
})
export class ComponenteCursosAgendadosComponent implements OnInit {
  cursos: Observable<Curso[]>;

  constructor(private cursoService: CursoService, private datePipe: DatePipe) {
    this.cursos = this.cursoService.listarCursos();
  }

  formatarData(data: Date): string {
    return this.datePipe.transform(data, 'dd/MM/yyyy') || '';
  }

  ngOnInit(): void {}
}
