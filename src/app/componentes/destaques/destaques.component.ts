import { Component } from '@angular/core';
import { Livro } from '../livro/livro';
import { CommonModule } from '@angular/common';
import { livros } from '../../mock-livros';

@Component({
  selector: 'app-destaques',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destaques.component.html',
  styleUrls: ['./destaques.component.css']
})
export class DestaquesComponent {
  livros: Livro[] = livros;  // lista original
  livrosFiltrados: Livro[] = livros;  // lista que será exibida, inicialmente igual a lista completa

  filtroAtivo: string = '*';  // Começa com "Todos"


  filtrar(categoria: string, event: Event) {
    event.preventDefault();
    this.filtroAtivo = categoria;

    if (categoria === '*') {
      this.livrosFiltrados = this.livros;
    } else {
      this.livrosFiltrados = this.livros.filter(livro => livro.genero.id === categoria);
    }
  }


  alternarFavorito(livro: Livro) {
    livro.reservado = !livro.reservado;
  }
}
