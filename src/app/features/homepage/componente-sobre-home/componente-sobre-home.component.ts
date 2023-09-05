import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-componente-sobre-home',
  templateUrl: './componente-sobre-home.component.html',
  styleUrls: ['./componente-sobre-home.component.css'],
})
export class ComponenteSobreHomeComponent {
  pathLogoOceb = '../../../../assets/images/home-page/oceb-logo-grande2.png';
  textDescription =
    'A OCEB-Ordem dos Capelães Evangélicos do Brasil, tem por finalidade: Promover e programar cursos, encontros, seminários, conferencias, preparação e capacitação de Capelania Evangélica Hospitalar, Prisional e áreas afins para ministros evangélicos, obreiros e voluntários diversas denominações, objetivando através do curso, o intercâmbio, a amizade e o companheirismo no corpo de Cristo';
}
