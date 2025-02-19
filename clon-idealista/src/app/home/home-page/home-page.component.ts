import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page', 
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  // Lista de textos aleatorios para el <h1>
  mensajes: string[] = [
    "Necesito un jardín",
    "Quiero mi casa ideal",
    "Busco un hogar acogedor",
    "Mi próximo apartamento me espera",
    "Encuentra tu lugar soñado",
    "Tu futuro hogar está aquí"
  ];

  // Selecciona un mensaje aleatorio al recargar la página
  mensajeAleatorio: string = this.mensajes[Math.floor(Math.random() * this.mensajes.length)];
}