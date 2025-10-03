import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Importando os componentes necessários
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';
import { CarrosselComponent } from '../carrossel/carrossel.component';
import { InfoComponent } from '../info/info.component';
import { GenerosComponent } from '../generos/generos.component';
import { DestaquesComponent } from '../destaques/destaques.component';
import { QuotesComponent } from '../quotes/quotes.component';
import { FaqComponent } from '../faq/faq.component';

@Component({
  selector: 'app-home',
  standalone: true,  // Indica que o componente é standalone
  imports: [
    CommonModule,
    FormsModule,
    CabecalhoComponent,  // Importa os componentes aqui
    CarrosselComponent,
    InfoComponent,
    GenerosComponent,
    DestaquesComponent,
    QuotesComponent,
    FaqComponent
  ],
  templateUrl: './home.component.html',  // Link para o template HTML
  styleUrls: ['./home.component.css']  // Link para os estilos
})
export class HomeComponent {
  // Qualquer lógica do componente pode ser adicionada aqui
}
