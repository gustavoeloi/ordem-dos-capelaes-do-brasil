import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Curso } from '../model/Curso';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  private readonly apiURL = 'http://localhost:8080/api/cursos';

  constructor(private http: HttpClient) {}

  listarCursos() {
    return this.http.get<Curso[]>(`${this.apiURL}/`).pipe(
      tap((cursos) => {
        console.log(cursos);
      })
    );
  }

  salvarCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(`${this.apiURL}/`, curso);
  }

  loadById(id: number): Observable<Curso> {
    return this.http.get<Curso>(`${this.apiURL}/${id}`);
  }

  atualizarCurso(id: number, curso: Curso) {
    return this.http.put<Curso>(`${this.apiURL}/${id}`, curso);
  }

  excluirCurso(id: string) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
