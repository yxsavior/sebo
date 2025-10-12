import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DadosService } from '../../services/dados.service';
import Chart from 'chart.js/auto';
import { DatatableComponent } from '../datatable/datatable.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true, // Marca o componente como standalone
  imports: [CommonModule, RouterModule, DatatableComponent],
  providers: [DadosService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit {
  totalLivros: number = 0;
  livrosReservados: number = 0;
  receitaEstimadas: string = 'R$ 0,00';
  confirmacoesPendentes: number = 0;
  porcentagemReservados: number = 0;

  constructor(private auth: AuthService, private dadosService: DadosService, private router: Router) {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    this.totalLivros = this.dadosService.contarTotalLivros();
    this.livrosReservados = this.dadosService.contarLivrosReservados();
    this.receitaEstimadas = this.dadosService.calcularReceitaTotalReservados();
    // this.confirmacoesPendentes = this.dadosService.contarConfirmacoesPendentes();
    this.porcentagemReservados = this.dadosService.calcularPorcentagemReservados();
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
    // Gráfico de Livros Totais vs Reservados
    new Chart('canvasGenero', {
      type: 'bar',
      data: {
        labels: ['Clássico', 'Contemporâneo', 'Fantasia', 'Suspense', 'Terror'],
        datasets: [{
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
        plugins: {
          // Não aplicamos datalabels aqui
        }
      }
    });

    // Gráfico de Vendas nos Últimos 6 Meses
    new Chart('canvasVendas', {
      type: 'line', // Tipo do gráfico: linha
      data: {
        labels: ['Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro'], // Meses
        datasets: [{
          label: 'Quantidade de Livros Vendidos',
          data: [12, 7, 16, 18, 21, 5], // Dados de vendas fictícios
          fill: false, // Não preenche a área abaixo da linha
          borderColor: '#36A2EB', // Cor da linha
          tension: 0.1, // Suaviza a curva
          borderWidth: 2, // Largura da linha
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top', // Posiciona a legenda
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => {
                return `Vendas: ${tooltipItem.raw} livros`;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true, // Começa o eixo Y no valor 0
          }
        }
      }
    });

    // Gráfico de vendas por gênero
    new Chart('canvasVendasGenero', {
      type: 'pie',
      data: {
        labels: ['Clássico', 'Contemporâneo', 'Fantasia', 'Suspense', 'Terror'],
        datasets: [{
          label: 'Vendas por Gênero',
          data: [
            this.dadosService.vendasPorGenero('classico'),
            this.dadosService.vendasPorGenero('contemporaneo'),
            this.dadosService.vendasPorGenero('fantasia'),
            this.dadosService.vendasPorGenero('suspense'),
            this.dadosService.vendasPorGenero('terror')
          ],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0'],
        }]
      },
      options: {
        responsive: true,
        plugins: {
          // Não aplicamos datalabels aqui
        }
      }
    });

    // Gráfico de Livros por Editora
    const editorasCom3OuMaisLivros = this.dadosService.obterEditorasCom3OuMaisLivros();
    const labels = editorasCom3OuMaisLivros.map(item => item.editora);
    const data = editorasCom3OuMaisLivros.map(item => item.quantidade);

    new Chart('canvasLivrosPorEditora', {
      type: 'bar',
      data: {
        labels: labels,  // Editoras com 3 ou mais livros
        datasets: [{
          label: 'Livros por Editora',
          data: data,  // Quantidade de livros por editora
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0'],
          borderWidth: 1,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          }
        }
      }
    });
  }
}
