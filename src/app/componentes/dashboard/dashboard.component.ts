import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Livro } from '../livro/livro';
import { livros } from '../../mock-livros';
import { DadosService } from '../../services/dados.service';
import { BannerComponent } from "../banner/banner.component";

@Component({
  selector: 'app-dashboard',
  standalone: true, // Marca o componente como standalone
  imports: [CommonModule, RouterModule, BannerComponent],
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

constructor(private dadosService: DadosService, private router: Router) {}

  ngOnInit(): void {
    this.totalLivros = this.dadosService.contarTotalLivros();
    this.livrosReservados = this.dadosService.contarLivrosReservados();
    this.receitaEstimadas = this.dadosService.calcularReceitaTotalReservados();
    // this.confirmacoesPendentes = this.dadosService.contarConfirmacoesPendentes();
    this.porcentagemReservados = this.dadosService.calcularPorcentagemReservados();
  }

  isCollapsed = false;

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
}
