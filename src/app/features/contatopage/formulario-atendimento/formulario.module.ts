import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioAtendimentoComponent } from './formulario-atendimento.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormularioAtendimentoComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [FormularioAtendimentoComponent],
})
export class FormularioModule {}
