import { CursoService } from 'src/app/services/curso.service';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Curso } from 'src/app/model/Curso';

interface Estado {
  nome: string;
  sigla: string;
}

@Component({
  selector: 'app-formulario-curso',
  templateUrl: './formulario-curso.component.html',
  styleUrls: ['./formulario-curso.component.css'],
  providers: [],
})
export class FormularioCursoComponent {
  formulario: FormGroup;
  dataCurso: Date = new Date();

  constructor(
    private fb: FormBuilder,
    private cursoService: CursoService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<FormularioCursoComponent>,

    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formulario = this.fb.group({
      uf: [null, Validators.required],
      cidade: [null, Validators.required],
      local: [null, Validators.required],
      horario: [null, Validators.required],
      valor: [null, Validators.required],
      dataCurso: [null, Validators.required],
      responsavel: [null, Validators.required],
      telefoneResponsavel: [null, Validators.required],
      descricao: [null, Validators.required],
    });
  }

  ufs: Estado[] = [
    { nome: 'Acre', sigla: 'AC' },
    { nome: 'Alagoas', sigla: 'AL' },
    { nome: 'Amapá', sigla: 'AP' },
    { nome: 'Amazonas', sigla: 'AM' },
    { nome: 'Bahia', sigla: 'BA' },
    { nome: 'Ceará', sigla: 'CE' },
    { nome: 'Distrito Federal', sigla: 'DF' },
    { nome: 'Espírito Santo', sigla: 'ES' },
    { nome: 'Goiás', sigla: 'GO' },
    { nome: 'Maranhão', sigla: 'MA' },
    { nome: 'Mato Grosso', sigla: 'MT' },
    { nome: 'Mato Grosso do Sul', sigla: 'MS' },
    { nome: 'Minas Gerais', sigla: 'MG' },
    { nome: 'Pará', sigla: 'PA' },
    { nome: 'Paraíba', sigla: 'PB' },
    { nome: 'Paraná', sigla: 'PR' },
    { nome: 'Pernambuco', sigla: 'PE' },
    { nome: 'Piauí', sigla: 'PI' },
    { nome: 'Rio de Janeiro', sigla: 'RJ' },
    { nome: 'Rio Grande do Norte', sigla: 'RN' },
    { nome: 'Rio Grande do Sul', sigla: 'RS' },
    { nome: 'Rondônia', sigla: 'RO' },
    { nome: 'Roraima', sigla: 'RR' },
    { nome: 'Santa Catarina', sigla: 'SC' },
    { nome: 'São Paulo', sigla: 'SP' },
    { nome: 'Sergipe', sigla: 'SE' },
    { nome: 'Tocantins', sigla: 'TO' },
  ];

  // formatarData(data: Date): string {
  //   const dia = String(data.getDate()).padStart(2, '0');
  //   const mes = String(data.getMonth() + 1).padStart(2, '0');
  //   const ano = data.getFullYear();
  //   return `${dia}/${mes}/${ano}`;
  // }

  saveCurso() {
    // Format the date as 'dd/MM/yyyy'
    // const dataCursoFormatada = this.formatarData(
    //   this.formulario.get('dataCurso')!.value
    // );

    const data = {
      dataCurso: this.formulario.get('dataCurso')!.value,
      uf: this.formulario.get('uf')!.value,
      cidade: this.formulario.get('cidade')!.value,
      local: this.formulario.get('local')!.value,
      horario: this.formulario.get('horario')!.value,
      valor: this.formulario.get('valor')!.value,
      responsavel: this.formulario.get('responsavel')!.value,
      telefoneResponsavel: this.formulario.get('telefoneResponsavel')!.value,
      descricao: this.formulario.get('descricao')!.value,
    } as Curso;

    this.cursoService.salvarCurso(data).subscribe((curso) => {
      this.dialogRef.close();
      this.snackBar.open('Curso agendado com sucesso!', 'Fechar', {
        duration: 2000,
      });
    });

    // window.location.reload();
  }
}
