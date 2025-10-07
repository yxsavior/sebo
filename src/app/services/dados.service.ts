import { Injectable } from '@angular/core';
import { livros } from '../mock-livros';
import { Livro } from '../componentes/livro/livro';

@Injectable({
  providedIn: 'root'
})

export class DadosService {

  constructor() { }

  // Obter todos os livros
  getLivros(): Livro[] {
    return livros;
  }

  // Total de livros
  contarTotalLivros(): number {
    return livros.length;
  }

  // Total de livros reservados
  contarLivrosReservados(): number {
    return livros.filter(l => l.reservado).length;
  }

  // Contar livros por gênero da autoria (feminino, masculino)
  contarPorGeneroAutoria(genero: string): number {
    return livros.filter(l => l.generoAutoria === genero).length;
  }

  // Contar livros por gênero (romance, fantasia, etc.)
  contarPorGenero(generoId: string): number {
    return livros.filter(l => l.genero.id === generoId).length;
  }

  // Calcular preço médio de um gênero
  calcularPrecoMedio(generoId: string): number {
    const livrosGenero = livros.filter(l => l.genero.id === generoId);
    if (livrosGenero.length === 0) return 0;

    const total = livrosGenero.reduce((soma, livro) => {
      const preco = parseFloat(livro.preco.replace('R$ ', '').replace(',', '.'));
      return soma + preco;
    }, 0);

    return parseFloat((total / livrosGenero.length).toFixed(2));
  }

  // DADOS PARA O DASHBOARD
  // Calcular receita estimada para livros reservados
  calcularReceitaTotalReservados(): string {
    const total = livros
      .filter(livro => livro.reservado) // Filtra apenas os livros reservados
      .reduce((soma, livro) => {
        const preco = parseFloat(livro.preco.replace('R$ ', '').replace(',', '.'));
        return soma + preco;
      }, 0);

    return `R$ ${total.toFixed(2)}`;
  }


  // Calcular a porcentagem de livros reservados
  calcularPorcentagemReservados(): number {
    const totalLivros = this.contarTotalLivros();
    const livrosReservados = this.contarLivrosReservados();
    return (livrosReservados / totalLivros) * 100;
  }



}
