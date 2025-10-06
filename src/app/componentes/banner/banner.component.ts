import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CabecalhoComponent } from "../cabecalho/cabecalho.component";
import { RodapeComponent } from "../rodape/rodape.component";
import { GraficosComponent } from "../graficos/graficos.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
   imports: [CommonModule, RouterModule, CabecalhoComponent, RodapeComponent, GraficosComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
 
}
