import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { FormularioAtendimentoComponent } from './features/contatopage/formulario-atendimento/formulario-atendimento.component';

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
    FormularioAtendimentoComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
