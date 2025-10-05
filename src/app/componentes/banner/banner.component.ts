import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-banner',
  imports: [RouterModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
 // Variáveis para o controle do estado da barra lateral e tema
  isSidebarActive: boolean = false;
  isDarkMode: boolean = false;

  // Função para alternar a barra lateral
  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }

  // Função para alternar o tema claro/escuro
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

   menuVisible = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
    const sidebar = document.getElementById('sidebar');
    if (this.menuVisible) {
      sidebar?.classList.add('show');
    } else {
      sidebar?.classList.remove('show');
    }
  }


}
