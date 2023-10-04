import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MockserviceService {
  cursos = [
    {
      id: 1,
      localizacao: 'Samambaia - 13/05/2023',
      local: 'Área especial nº Samambaia, Brasília - DF, 71805-100',
      horario: '08h às 13h',
      valor: 120,
    },
    {
      id: 2,
      localizacao: 'Riacho Fundo 1 - 20/05/2023',
      local: 'Área especial nº 01, Riacho Fundo, Brasília - DF, 71805-100',
      horario: '08h às 13h',
      valor: 120,
    },
    {
      id: 3,
      localizacao: 'Taguatinga - 27/05/2023',
      local: 'Taguatinga, Brasília - DF, 71805-100',
      horario: '08h às 13h',
      valor: 120,
    },
    {
      id: 3,
      localizacao: 'Samambaia - 04/06/2023',
      local: 'Área especial nº 01, Riacho Fundo, Brasília - DF, 71805-100',
      horario: '08h às 13h',
      valor: 120,
    },
    {
      id: 4,
      localizacao: 'Planaltina - 11/06/2023',
      local: 'Planaltina, Brasília - DF, 71805-100',
      horario: '08h às 13h',
      valor: 120,
    },
    {
      id: 4,
      localizacao: 'Planaltina - 11/06/2023',
      local: 'Planaltina, Brasília - DF, 71805-100',
      horario: '08h às 13h',
      valor: 120,
    },
  ];

  getCursos() {
    return this.cursos;
  }
}
