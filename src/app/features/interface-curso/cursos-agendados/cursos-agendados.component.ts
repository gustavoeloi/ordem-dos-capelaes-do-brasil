import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Curso } from 'src/app/model/Curso';
import { CursoService } from 'src/app/services/curso.service';
import { FormularioCursoComponent } from '../formulario-curso/formulario-curso.component';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-cursos-agendados',
  templateUrl: './cursos-agendados.component.html',
  styleUrls: ['./cursos-agendados.component.css'],
})
export class CursosAgendadosComponent implements OnInit {
  cursos: Observable<Curso[]>;
  cursoEmEdicao: Curso | null = null;

  constructor(
    private cursoService: CursoService,
    private dialog: MatDialog,
    private datePipe: DatePipe,
    private _snackBar: MatSnackBar
  ) {
    this.cursos = this.cursoService.listarCursos();
  }

  formatarData(data: Date): string {
    return this.datePipe.transform(data, 'dd/MM/yyyy') || '';
  }

  ngOnInit(): void {}

  openPopUp() {
    this.dialog.open(FormularioCursoComponent, {
      width: '40%',
    });
  }

  addCursos() {
    this.openPopUp();
  }

  abrirDialogConfirmacao(id?: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.excluirCurso(id);
      } else {
        dialogRef.close();
      }
    });
  }

  editarCurso(curso: Curso) {
    this.cursoEmEdicao = curso;
    this.openPopUp();
  }

  excluirCurso(id?: string) {
    if (id) {
      this.cursoService.excluirCurso(id).subscribe(
        (sucesso) => {
          this._snackBar.open('Curso excluído com sucesso!', 'Fechar', {
            duration: 2000,
          });
          this.cursos = this.cursoService.listarCursos();
        },
        (erro) => {
          alert('Erro ao excluir curso!');
          console.log(erro);
        }
      );
    }
  }
}
