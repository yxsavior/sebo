import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';
import { RodapeComponent } from '../rodape/rodape.component';
import { BannerComponent } from "../banner/banner.component";

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterModule, CabecalhoComponent, RodapeComponent, BannerComponent],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
  constructor() {
    console.log('CatalogoComponent foi carregado!');
  }
}
