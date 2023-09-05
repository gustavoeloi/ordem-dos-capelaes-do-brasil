import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './features/homepage/homepage.component';
import { SobrepageComponent } from './features/sobrepage/sobrepage.component';
import { CapelaniapageComponent } from './features/capelaniapage/capelaniapage.component';
import { ContatopageComponent } from './features/contatopage/contatopage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'sobre', component: SobrepageComponent },
  { path: 'capelania', component: CapelaniapageComponent },
  { path: 'contato', component: ContatopageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
