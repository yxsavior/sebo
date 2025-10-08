import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { Usuario } from '../../models/usuario.model'; // Modelo de usuário importado
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: Usuario = { nome: '', senha: '' };
  loginError: string = ''; 
  isLoggingIn: boolean = false; 

  constructor(private authService: AuthService, private router: Router) {}

  login(event: Event) {
    event.preventDefault();  // Impede o comportamento padrão do formulário (recarregar a página)
    this.isLoggingIn = true; 
    this.loginError = ''; 

    // Chama o método login do AuthService
    const success = this.authService.login(this.usuario.nome, this.usuario.senha);

    if (success) {
      console.log("Login bem-sucedido!");
      this.router.navigate(['/dashboard']); // Redireciona após o login
    } else {
      console.log("Falha no login");
      this.loginError = 'Parece que você bebeu a poção de encolhimento, mas esqueceu de trazer a chave.';
    }

    this.isLoggingIn = false; // Finaliza o processo de login
  }
}
