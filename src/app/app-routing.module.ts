import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './features/homepage/homepage.component';
import { SobrepageComponent } from './features/sobrepage/sobrepage.component';
import { CapelaniapageComponent } from './features/capelaniapage/capelaniapage.component';
import { ContatopageComponent } from './features/contatopage/contatopage.component';
import { CursosAgendadosComponent } from './features/interface-curso/cursos-agendados/cursos-agendados.component';
import { FormularioCursoComponent } from './features/interface-curso/formulario-curso/formulario-curso.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomepageComponent },
  { path: 'sobre', component: SobrepageComponent },
  { path: 'capelania', component: CapelaniapageComponent },
  { path: 'contato', component: ContatopageComponent },
  { path: 'agendar-cursos', component: CursosAgendadosComponent },
  { path: 'cursos/agendar', component: FormularioCursoComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
