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

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    FooterComponent,
    HomepageComponent,
    SobrepageComponent,
    CursospageComponent,
    ContatopageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
