import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = { nome: '', senha: '' };
  isLoggingIn = false;
  loginError = '';

  constructor(private auth: AuthService, private router: Router) {}

  login(event: Event) {
    event.preventDefault();
    this.isLoggingIn = true;
    this.loginError = '';

    const ok = this.auth.login(this.usuario.nome, this.usuario.senha);

    if (ok) {
      this.router.navigate(['/dashboard']);
    } else {
      this.loginError = 'Parece que você bebeu a poção de encolhimento, mas esqueceu de trazer a chave.';
    }

    this.isLoggingIn = false;
  }
}
