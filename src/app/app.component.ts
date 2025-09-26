import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";
import { CarrosselComponent } from "./componentes/carrossel/carrossel.component";
import { GenerosComponent } from './componentes/generos/generos.component';
import { DestaquesComponent } from "./componentes/destaques/destaques.component";
import { FaqComponent } from "./componentes/faq/faq.component";
import { InfoComponent } from "./componentes/info/info.component";
import { RodapeComponent } from "./componentes/rodape/rodape.component";
import { QuotesComponent } from "./componentes/quotes/quotes.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabecalhoComponent, CarrosselComponent, GenerosComponent, DestaquesComponent, FaqComponent, InfoComponent, RodapeComponent, QuotesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'senai';
}
