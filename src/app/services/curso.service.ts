import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../models/Curso';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  private apiURL = 'http://localhost:8080/cursos';

  constructor(private http: HttpClient) {}

  listarCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.apiURL}`);
  }
}
