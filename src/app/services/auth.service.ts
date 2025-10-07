import { Injectable } from '@angular/core';

const USER_KEY = 'auth_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;

  constructor() {}

  login(username: string, password: string): boolean {
    // Simula um login sem comunicação com API
    if (username === 'admin' && password === '123456') {
      this.isAuthenticated = true;
      sessionStorage.setItem(USER_KEY, 'authenticated');
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    sessionStorage.removeItem(USER_KEY);
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem(USER_KEY) !== null;
  }
}
