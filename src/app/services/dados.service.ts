import { Injectable } from '@angular/core';
import { livros } from '../mock-livros';
import { Livro } from '../componentes/livro/livro';

// DadosService
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

  // Vendas por Gênero
  vendasPorGenero(generoId: string): number {
    // Aqui você precisaria adaptar a lógica para contabilizar as vendas dos livros
    return livros.filter(l => l.genero.id === generoId && l.reservado).length;
  }

  // Contar editoras com 3 ou mais livros
  obterEditorasCom3OuMaisLivros(): { editora: string, quantidade: number }[] {
    // Tipando explicitamente o acumulador
    const editoras: { [key: string]: number } = livros.reduce((acc, livro) => {
      acc[livro.editora] = (acc[livro.editora] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });  // Tipo explícito para o acumulador

    // Filtra as editoras com 3 ou mais livros
    return Object.keys(editoras)
      .filter(editora => editoras[editora] >= 3)
      .map(editora => ({
        editora,
        quantidade: editoras[editora]
      }));
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
