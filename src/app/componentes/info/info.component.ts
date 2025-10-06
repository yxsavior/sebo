import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/css';


@Component({
  selector: 'app-info',
  standalone: true,  // Este é um componente standalone
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements AfterViewInit {

  ngAfterViewInit() {
    // new Swiper('.swiper-container', {
    const swiper = new Swiper('.swiper', {
      loop: true,
      slidesPerView: 1, // Número de slides visíveis
      spaceBetween: 10, // Espaço entre os slides
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        768: {
          slidesPerView: 1, // Exibir um slide por vez em telas menores
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
        1024: {
          slidesPerView: 3, // Exibir 3 slides por vez em telas maiores
          navigation: false,  // Remover navegação em telas grandes
        },
      },
    });
  }
}

