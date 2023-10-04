import { Component, OnInit } from '@angular/core';
import { Cursos } from './Cursos';
import { MockserviceService } from 'src/app/services/mockservice.service';

@Component({
  selector: 'app-componente-cursos-agendados',
  templateUrl: './componente-cursos-agendados.component.html',
  styleUrls: ['./componente-cursos-agendados.component.css'],
})
export class ComponenteCursosAgendadosComponent implements OnInit {
  cursos: Cursos[] = [];

  constructor(private cursoMockService: MockserviceService) {}

  ngOnInit(): void {
    this.cursos = this.cursoMockService.getCursos();
  }
}
