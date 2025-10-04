import { Component, input } from '@angular/core';
import { Livro } from '../livro/livro';
import { CommonModule } from '@angular/common';
import { livros } from '../../mock-livros';

@Component({
  selector: 'app-destaques',
  standalone: true,  // Este é um componente standalone
  imports: [CommonModule],
  templateUrl: './destaques.component.html',
  styleUrl: './destaques.component.css'
})
export class DestaquesComponent {
  // livro = input.required<Livro>();

  // alternarFavorito() {
  //   this.livro().favorito = !this.livro().favorito
  // }

  livros: Livro[] = livros;  // atribui o mock

  alternarFavorito(livro: Livro) {
    livro.favorito = !livro.favorito;
  }
}
