import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cabecalho',
  standalone: true,  // Este é um componente standalone
  imports: [RouterModule, CommonModule],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {
   user$: Observable<any>;

  constructor(private auth: AuthService) {
    this.user$ = this.auth.currentUser$;
  }

  logout() {
    this.auth.logout();
  }
}