import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './core/components/header-navbar/header-navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { SobrepageComponent } from './features/sobrepage/sobrepage.component';
import { ContatopageComponent } from './features/contatopage/contatopage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ComponenteCapelaniasComponent } from './features/homepage/componente-capelanias/componente-capelanias.component';
import { MatCardModule } from '@angular/material/card';
import { ComponenteCursosAgendadosComponent } from './features/homepage/componente-cursos-agendados/componente-cursos-agendados.component';
import { MatDividerModule } from '@angular/material/divider';
import { ComponenteGaleriaFotosComponent } from './features/homepage/componente-galeria-fotos/componente-galeria-fotos.component';
import { ComponenteSobreHomeComponent } from './features/homepage/componente-sobre-home/componente-sobre-home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MvvComponent } from './features/sobrepage/mvv/mvv.component';
import { AgendeSeuCursoComponent } from './features/sobrepage/agende-seu-curso/agende-seu-curso.component';
import { CapelaniapageComponent } from './features/capelaniapage/capelaniapage.component';
import { CapelaniasComponent } from './features/capelaniapage/capelanias/capelanias.component';
import { GaleriaCursosComponent } from './features/capelaniapage/galeria-cursos/galeria-cursos.component';
import { CarouselModule } from './shared/carousel/carousel.module';
import { FormularioModule } from './features/contatopage/formulario-atendimento/formulario.module';
import { HttpClientModule } from '@angular/common/http';
import { CursosAgendadosComponent } from './features/interface-curso/cursos-agendados/cursos-agendados.component';
import { FormularioCursoComponent } from './features/interface-curso/formulario-curso/formulario-curso.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { SharedModule } from './shared/shared.module';
import { ConfirmDialogComponent } from './features/interface-curso/cursos-agendados/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    FooterComponent,
    HomepageComponent,
    SobrepageComponent,
    ContatopageComponent,
    ComponenteCapelaniasComponent,
    ComponenteCursosAgendadosComponent,
    ComponenteGaleriaFotosComponent,
    ComponenteSobreHomeComponent,
    MvvComponent,
    AgendeSeuCursoComponent,
    CapelaniapageComponent,
    CapelaniasComponent,
    GaleriaCursosComponent,
    CursosAgendadosComponent,
    FormularioCursoComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    CarouselModule,
    FormularioModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,
    SharedModule,
  ],
  providers: [DatePipe, { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
