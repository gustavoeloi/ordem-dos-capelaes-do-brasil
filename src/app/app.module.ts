import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './core/components/header-navbar/header-navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { SobrepageComponent } from './features/sobrepage/sobrepage.component';
import { CursospageComponent } from './features/cursospage/cursospage.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    FooterComponent,
    HomepageComponent,
    SobrepageComponent,
    CursospageComponent,
    ContatopageComponent,
    ComponenteCapelaniasComponent,
    ComponenteCursosAgendadosComponent,
    ComponenteGaleriaFotosComponent,
    ComponenteSobreHomeComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
