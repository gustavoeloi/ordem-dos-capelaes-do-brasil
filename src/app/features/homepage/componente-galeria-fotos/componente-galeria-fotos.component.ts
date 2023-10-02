import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-galeria-fotos',
  templateUrl: './componente-galeria-fotos.component.html',
  styleUrls: ['./componente-galeria-fotos.component.css'],
})
export class ComponenteGaleriaFotosComponent {
  images = [
    {
      imageSrc: '../assets/images/home-page/foto1-galeria.png',
      imageAlt: 'Image1',
    },
    {
      imageSrc: '../assets/images/home-page/foto2-galeria.png',
      imageAlt: 'Image2',
    },
    {
      imageSrc: '../assets/images/home-page/foto3-galeria.png',
      imageAlt: 'Image1',
    },
    {
      imageSrc: '../assets/images/home-page/foto4-galeria.png',
      imageAlt: 'Image1',
    },
  ];
}
