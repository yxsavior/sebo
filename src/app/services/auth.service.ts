import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

export interface User {
  username: string;
}

const USER_KEY = 'currentUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private router: Router) {
    // Quando o app é carregado, tenta restaurar o usuário logado
    const userJson = sessionStorage.getItem(USER_KEY);
    if (userJson) {
      this.currentUserSubject.next(JSON.parse(userJson));
    }
  }

  /** Login simples com usuário fixo */
  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '123456') {
      const user = { username };
      sessionStorage.setItem(USER_KEY, JSON.stringify(user));
      this.currentUserSubject.next(user);
      return true;
    }
    return false;
  }

  /** Faz logout e notifica toda a aplicação */
  logout(): void {
    sessionStorage.removeItem(USER_KEY);
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  /** Consulta síncrona (ex: usada no AuthGuard) */
  isLoggedIn(): boolean {
    return !!this.currentUserSubject.value;
  }
}
