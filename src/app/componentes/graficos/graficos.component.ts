import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { livros } from '../../mock-livros';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {
  // Função para contar o total de livros reservados
  contarLivrosReservados(): number {
    return livros.filter(livro => livro.reservado === true).length;
  }

  // Função para contar o total de livros (não reservados ou reservados)
  contarTotalLivros(): number {
    return livros.length;
  }

  // Gráfico de Gênero de Autoria (Feminino vs Masculino)
  public graficoGeneroAutoriaData: any[] = [
    { data: [this.contarPorGeneroAutoria('feminino'), this.contarPorGeneroAutoria('masculino')], label: 'Gênero da Autoria' }
  ];

  // Opções do gráfico
  public graficoOptions: any = {
    responsive: true,
  };

  public graficoGeneroAutoriaLabels: string[] = ['Feminino', 'Masculino'];

  // Função para contar livros por gênero da autoria
  contarPorGeneroAutoria(generoAutoria: string): number {
    return livros.filter(livro => livro.generoAutoria === generoAutoria).length;
  }

  // Gráfico por Gênero
  public graficoGeneroData: any[] = [
    { data: this.contarPorGenero('romance'), label: 'Romance' },
    { data: this.contarPorGenero('fantasia'), label: 'Fantasia' },
    { data: this.contarPorGenero('misterio'), label: 'Misterio' }
  ];

  public graficoLabels: string[] = ['Romance', 'Fantasia', 'Misterio'];

  // Função para contar livros por gênero
  contarPorGenero(generoId: string): number {
    return livros.filter(livro => livro.genero.id === generoId).length;
  }

  // Gráfico de Preço Médio
  public graficoPrecoData: any[] = [
    { data: [this.calcularPrecoMedio('romance'), this.calcularPrecoMedio('fantasia'), this.calcularPrecoMedio('misterio')], label: 'Preço Médio' }
  ];

  public graficoPrecoLabels: string[] = ['Romance', 'Fantasia', 'Misterio'];

  // Função para calcular o preço médio por gênero
  calcularPrecoMedio(generoId: string): string {
    const livrosPorGenero = livros.filter(livro => livro.genero.id === generoId);
    const somaPreco = livrosPorGenero.reduce((acc, livro) => acc + parseFloat(livro.preco.replace('R$ ', '').replace(',', '.')), 0);
    return (somaPreco / livrosPorGenero.length).toFixed(2);
  }

  // Gráfico de Quantidade Total de Livros
  public graficoQuantidadeData: number[] = [livros.length];
  public graficoQuantidadeLabels: string[] = ['Total de Livros'];

  ngOnInit() {
    this.iniciarGraficos();
  }

  iniciarGraficos() {
    // Gráfico de Gênero de Autoria
    new Chart('canvasGeneroAutoria', {
      type: 'pie',
      data: {
        labels: this.graficoGeneroAutoriaLabels,
        datasets: [{
          label: 'Gênero da Autoria',
          data: [this.contarPorGeneroAutoria('feminino'), this.contarPorGeneroAutoria('masculino')],
          backgroundColor: ['#FF6384', '#36A2EB'],
        }]
      },
      options: this.graficoOptions
    });

    // Gráfico de Gênero
new Chart('canvasGenero', {
  type: 'pie',
  data: {
    labels: this.graficoLabels,
    datasets: [{
      label: 'Gênero dos Livros',
      data: this.graficoGeneroData.map(item => item.data), // Garanta que é um array com os dados corretos
      backgroundColor: ['#FF6347', '#FFD700', '#20B2AA'], // Cores para cada gênero
    }]
  },
  options: this.graficoOptions
});

    // Gráfico de Preço Médio
    new Chart('canvasPreco', {
      type: 'bar',
      data: {
        labels: this.graficoPrecoLabels,
        datasets: this.graficoPrecoData.map(item => ({
          label: item.label,
          data: [parseFloat(item.data)], // Garantir que o preço seja numérico
          backgroundColor: '#8E44AD', // Cor para o gráfico de barras
        }))
      },
      options: this.graficoOptions
    });

    // Gráfico de Quantidade Total de Livros
    new Chart('canvasQuantidade', {
      type: 'doughnut',
      data: {
        labels: this.graficoQuantidadeLabels,
        datasets: [{
          label: 'Quantidade de Livros',
          data: this.graficoQuantidadeData,
          backgroundColor: ['#1F77B4'], // Cor para o gráfico de rosca
        }]
      },
      options: this.graficoOptions
    });


  // Gráfico de Total de Livros vs Livros Reservados
    new Chart('canvasLivrosReservados', {
      type: 'bar',
      data: {
        labels: ['Total de Livros', 'Livros Reservados'],  // Labels do gráfico
        datasets: [{
          label: 'Quantidade de Livros',
          data: [
            this.contarTotalLivros(), // Total de livros
            this.contarLivrosReservados() // Livros reservados
          ],
          backgroundColor: ['#3498db', '#e74c3c'], // Cor para as barras
        }]
      },
      options: this.graficoOptions
    });
  }
}