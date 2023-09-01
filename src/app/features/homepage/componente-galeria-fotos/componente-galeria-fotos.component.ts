import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-galeria-fotos',
  templateUrl: './componente-galeria-fotos.component.html',
  styleUrls: ['./componente-galeria-fotos.component.css'],
})
export class ComponenteGaleriaFotosComponent {
  pathFirstImageGaleria =
    '../../../../assets/images/home-page/foto1-galeria.png';
  pathSecondImageGaleria =
    '../../../../assets/images/home-page/foto2-galeria.png';
  pathThirdImageGaleria =
    '../../../../assets/images/home-page/foto3-galeria.png';
  pathFourthImageGaleria =
    '../../../../assets/images/home-page/foto4-galeria.png';
}
