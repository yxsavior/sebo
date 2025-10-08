import { Component } from '@angular/core';
import { livros } from '../../mock-livros';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-datatable',
  imports: [CommonModule, FormsModule],
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {
  livros = livros; // Dados dos livros
  pageSize: number = 10; // Tamanho da página
  currentPage: number = 1; // Página atual
  totalEntries: number = livros.length; // Total de registros
  generos: string[] = ['Ficção', 'Romance', 'Aventura', 'Biografia']; // Exemplos de gêneros
  condicoes: string[] = ['Novo', 'Usado', 'Seminovo']; // Exemplos de condições
  filters = { // Objeto de filtros
    titulo: '',
    autoria: '',
    genero: '',
    preco: null,
    editora: '',
    condicao: ''
  };

  constructor() {}

  // Método para aplicar filtros e ordenação
  applyFiltersAndSort() {
    let filteredBooks = livros.filter(livro => {
      return (
        (this.filters.titulo ? livro.titulo.toLowerCase().includes(this.filters.titulo.toLowerCase()) : true) &&
        (this.filters.autoria ? livro.autoria.toLowerCase().includes(this.filters.autoria.toLowerCase()) : true) &&
        (this.filters.genero ? livro.genero.value === this.filters.genero : true) &&
        (this.filters.preco !== null ? parseFloat(livro.preco) <= this.filters.preco : true) &&
        (this.filters.editora ? livro.editora.toLowerCase().includes(this.filters.editora.toLowerCase()) : true) &&
        (this.filters.condicao ? livro.condicao === this.filters.condicao : true)
      );
    });

    filteredBooks = filteredBooks.sort((a, b) => {
      const titleA = a.titulo.toLowerCase();
      const titleB = b.titulo.toLowerCase();
      if (titleA < titleB) return -1;
      if (titleA > titleB) return 1;
      return 0;
    });

    this.livros = filteredBooks;
  }

  // Método de busca
  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    const query = input?.value.toLowerCase() || '';
    this.filters.titulo = query; // Atualiza o filtro de título
    this.applyFiltersAndSort(); // Aplica os filtros e ordenação
  }

  // Método para exibir os livros da página atual
  get displayedBooks() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = this.currentPage * this.pageSize;
    return this.livros.slice(start, end);
  }

  // Método para calcular o número total de páginas
  totalPages() {
    return Math.ceil(this.totalEntries / this.pageSize);
  }

  // Método para gerar os números das páginas
  pageNumbers() {
    const pages = [];
    for (let i = 1; i <= this.totalPages(); i++) {
      pages.push(i);
    }
    return pages;
  }

  // Método para alterar a página
  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage = page;
    }
  }

  // Método para alterar o tamanho da página
  changePageSize(size: number) {
    this.pageSize = size;
    this.currentPage = 1; // Voltar para a primeira página ao mudar o tamanho
  }

  // Calcular o primeiro item da página atual
  get firstItem(): number {
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  // Calcular o último item da página atual
  get lastItem(): number {
    return Math.min(this.currentPage * this.pageSize, this.totalEntries);
  }
}
