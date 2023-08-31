import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './features/homepage/homepage.component';
import { SobrepageComponent } from './features/sobrepage/sobrepage.component';
import { CursospageComponent } from './features/cursospage/cursospage.component';
import { ContatopageComponent } from './features/contatopage/contatopage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'sobre', component: SobrepageComponent },
  { path: 'cursos', component: CursospageComponent },
  { path: 'contato', component: ContatopageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
