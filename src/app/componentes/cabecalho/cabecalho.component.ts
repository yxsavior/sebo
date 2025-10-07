import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cabecalho',
  standalone: true,  // Este é um componente standalone
  imports: [RouterModule, CommonModule],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();  // Checa se o usuário está logado
  }

  logout() {
    this.authService.logout();  // Chama o logout
    this.isLoggedIn = false;  // Atualiza a variável de login
  }
}