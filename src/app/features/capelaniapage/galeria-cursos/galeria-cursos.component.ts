import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria-cursos',
  templateUrl: './galeria-cursos.component.html',
  styleUrls: ['./galeria-cursos.component.css'],
})
export class GaleriaCursosComponent {
  images = [
    {
      imageSrc: '../../../../assets/images/capelania-page/cursos-foto4 2.png',
      imageAlt: 'foto 1',
    },
    {
      imageSrc: '../../../../assets/images/capelania-page/cursos-fotos 1.png',
      imageAlt: 'foto 1',
    },
    {
      imageSrc: '../../../../assets/images/capelania-page/cursos-fotos2 1.png',
      imageAlt: 'foto 1',
    },
    {
      imageSrc: '../../../../assets/images/capelania-page/foto4-galeria 2.png',
      imageAlt: 'foto 1',
    },
  ];
}
