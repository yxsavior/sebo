import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { DadosService } from '../../services/dados.service';
import ChartDataLabels from 'chartjs-plugin-datalabels';  // Importe o plugin
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-graficos',
  imports: [CommonModule, RouterModule],
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {

  totalLivros = 0;
  livrosReservados = 0;

constructor(private dadosService: DadosService, private router: Router) {}

  ngOnInit(): void {
    this.totalLivros = this.dadosService.contarTotalLivros();
    this.livrosReservados = this.dadosService.contarLivrosReservados();
    this.iniciarGraficos();
  }

   isCollapsed = true;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  menuOnClick(): void {
    const menuBar = document.getElementById("menu-bar");
    const nav = document.getElementById("nav");
    const menuBg = document.getElementById("menu-bg");
  
    if (menuBar && nav && menuBg) {
      menuBar.classList.toggle("change");
      nav.classList.toggle("change");
      menuBg.classList.toggle("change-bg");
    } else {
      console.warn("Um ou mais elementos não foram encontrados no DOM.");
    }
  }

  logout() {
    this.router.navigate(['/login']);
  }

  iniciarGraficos(): void {
    // Gráfico de Gênero da Autoria
    new Chart('canvasGeneroAutoria', {
      type: 'pie',
      data: {
        labels: ['Feminino', 'Masculino'],
        datasets: [{
          label: 'Gênero da Autoria',
          data: [
            this.dadosService.contarPorGeneroAutoria('feminino'),
            this.dadosService.contarPorGeneroAutoria('masculino')
          ],
          backgroundColor: ['#FF6384', '#36A2EB']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          // Não aplicamos datalabels aqui
        }
      }
    });

    // Gráfico de Gênero dos Livros
    new Chart('canvasGenero', {
      type: 'bar',
      data: {
        labels: ['Clássico', 'Contemporâneo', 'Fantasia', 'Suspense', 'Terror'],
        datasets: [{
          // label: 'Quantidade',
          data: [
            this.dadosService.contarPorGenero('classico'),
            this.dadosService.contarPorGenero('contemporaneo'),
            this.dadosService.contarPorGenero('fantasia'),
            this.dadosService.contarPorGenero('suspense'),
            this.dadosService.contarPorGenero('terror')
          ],
          backgroundColor: ['#31615aff', '#FFD700', '#8046a1ff', '#e63946ff', '#181009ff']
        }]
      },
      options: {
        responsive: true,
        scales: {
          r: {
            ticks: {
              display: false // Desabilita os números no eixo Y (radial)
            }
          }
        },
        plugins: {
          // Não aplicamos datalabels aqui
        }
      }
    });

    // Gráfico de Preço Médio
    new Chart('canvasPreco', {
      type: 'bar',
      data: {
        labels: ['Romance', 'Fantasia', 'Misterio'],
        datasets: [{
          label: 'Preço Médio',
          data: [
            this.dadosService.calcularPrecoMedio('classico'),
            this.dadosService.calcularPrecoMedio('fantasia'),
            this.dadosService.calcularPrecoMedio('suspense')
          ],
          backgroundColor: '#8E44AD'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          // Não aplicamos datalabels aqui
        }
      }
    });

    // Gráfico de Quantidade Total de Livros
    new Chart('canvasQuantidade', {
      type: 'bar',
      data: {
        labels: ['Total de Livros'],
        datasets: [{
          label: 'Quantidade',
          data: [this.totalLivros],
          backgroundColor: ['#1F77B4']
        }]
      },
      options: {
        responsive: true,
        indexAxis: 'y', // Muda para barras horizontais
        plugins: {
          // Não aplicamos datalabels aqui
        },
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Gráfico de Livros Totais vs Reservados
    new Chart('canvasLivrosReservados', {
      type: 'bar',
      data: {
        labels: ['Total de Livros', 'Livros Reservados'],
        datasets: [{
          label: 'Quantidade',
          data: [this.totalLivros, this.livrosReservados],
          backgroundColor: ['#3498db', '#e74c3c']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          // Não aplicamos datalabels aqui
        }
      }
    });

    // Gráfico de Livros Totais vs Reservados com percentual (Doughnut)
    const totalLivros = this.totalLivros;
    const livrosReservados = this.livrosReservados;
    const livrosNaoReservados = totalLivros - livrosReservados;
    
  new Chart('canvasLivrosReservadosDonut', {
  type: 'doughnut', // Tipo do gráfico: doughnut (rosca)
  data: {
    labels: ['Reservados', 'Não Reservados'], // Labels
    datasets: [{
      label: 'Livros Reservados',
      data: [livrosReservados, livrosNaoReservados], // Dados
      backgroundColor: ['#ad36bdff', '#36b3a2ff'], // Cores
      borderWidth: 0 // Retira as bordas
    }]
  },
  options: {
    responsive: true, // Responsividade
    maintainAspectRatio: false, // Mantém o aspecto da proporção
    cutout: '80%', // Controla o tamanho do buraco do gráfico
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            let value = tooltipItem.raw as number;
            return `${value} livros`;
          }
        }
      },
      legend: {
        position: 'top'
      },
      datalabels: {
        formatter: (value: number, ctx: any) => {
          const total = ctx.dataset.data.reduce((acc: number, currentValue: number) => acc + currentValue, 0);
          const percentage = (value / total) * 100;
          return percentage.toFixed(2) + '%'; // Exibe o percentual com duas casas decimais
        },
        color: '#fff', // Cor do texto (branco)
        font: {
          weight: 'bold',
          size: 20
        }
      }
    },
    // animation: {
    //   onComplete: function () {
    //     const chartInstance = this as Chart; // Fazemos um cast explícito para Chart
    //     const ctx = chartInstance.ctx;
    //     const centerX = chartInstance.width / 2;
    //     const centerY = chartInstance.height / 2;
    //     const fontSize = 38;
    //     const fontWeight = 'bold';
    //     ctx.font = `${fontWeight} ${fontSize}px Prata`;
    //     ctx.fillStyle = '#260038ff'; // Cor do texto
    //     ctx.textAlign = 'center';
    //     ctx.textBaseline = 'middle';
    //     ctx.fillText(`${livrosReservados} / ${totalLivros}`, centerX, centerY);
    //   }
    // }
  }
});


  }
}
