import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IForm } from './iForm';

@Component({
  selector: 'app-formulario-atendimento',
  templateUrl: './formulario-atendimento.component.html',
  styleUrls: ['./formulario-atendimento.component.css'],
})
export class FormularioAtendimentoComponent {
  form: FormGroup = this.fb.group<IForm>({
    nome: '',
    email: '',
    mensagem: '',
    motivo: '',
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.form.value);
  }
}
