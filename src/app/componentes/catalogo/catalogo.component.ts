import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';
import { RodapeComponent } from '../rodape/rodape.component';
import { BannerComponent } from "../banner/banner.component";
import { GraficosComponent } from "../graficos/graficos.component";

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterModule, CabecalhoComponent, RodapeComponent, GraficosComponent],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
  constructor() {
    console.log('CatalogoComponent foi carregado!');
  }
}
