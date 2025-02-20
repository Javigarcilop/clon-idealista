import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  // 🎯 Lista de textos aleatorios para el <h1>
  mensajes: string[] = [
    "Necesito un jardín",
    "Quiero mi casa ideal",
    "Busco un hogar acogedor",
    "Mi próximo apartamento me espera",
    "Encuentra tu lugar soñado",
    "Tu futuro hogar está aquí"
  ];
  // 📌 Selecciona un mensaje aleatorio al recargar la página
  mensajeAleatorio: string = this.mensajes[Math.floor(Math.random() * this.mensajes.length)];

  // 🎯 Categorías de noticias
  categorias: string[] = ['Noticias destacadas', 'Inmobiliario', 'Finanzas', 'Vacacional', 'Deco'];
  categoriaSeleccionada: string = 'Deco';

  // 📌 Definir objeto de noticias con índice genérico
  noticias: Record<string, { titulo: string; imagen: string }[]> = {
    'Noticias destacadas': [
      { titulo: 'Se vende una lujosa villa en las colinas de Cala Mastella: estilo ibicenco y moderno con vistas al mar', imagen: 'assets/villa.jpg' },
      { titulo: 'Se vende uno de los áticos más altos del mundo por 51 millones de dólares', imagen: 'assets/atico.jpg' },
      { titulo: 'Planta de jade: ¿cómo cuidarla para disfrutar de sus beneficios?', imagen: 'assets/planta.jpg' }
    ],
    'Inmobiliario': [
      { titulo: 'Las nuevas tendencias en el mercado de viviendas de lujo', imagen: 'assets/lujo.jpg' },
      { titulo: 'Los barrios más demandados para invertir en 2025', imagen: 'assets/barrios.jpg' },
      { titulo: 'Cómo financiar la compra de tu primera casa', imagen: 'assets/financiar.jpg' }
    ],
    'Finanzas': [
      { titulo: 'Los mejores consejos para invertir en bienes raíces', imagen: 'assets/inversion.jpg' },
      { titulo: 'Cómo calcular el valor de una propiedad', imagen: 'assets/valoracion.jpg' },
      { titulo: 'Hipotecas: lo que debes saber antes de contratar una', imagen: 'assets/hipoteca.jpg' }
    ],
    'Vacacional': [
      { titulo: 'Los destinos turísticos más rentables para alquilar', imagen: 'assets/turismo.jpg' },
      { titulo: 'Casas rurales: una nueva tendencia en el mercado inmobiliario', imagen: 'assets/rural.jpg' },
      { titulo: 'Cómo rentabilizar una vivienda para alquiler vacacional', imagen: 'assets/alquiler.jpg' }
    ],
    'Deco': [
      { titulo: 'Se vende una lujosa villa en las colinas de Cala Mastella: estilo ibicenco y moderno con vistas al mar', imagen: 'assets/villa.jpg' },
      { titulo: 'Se vende uno de los áticos más altos del mundo por 51 millones de dólares', imagen: 'assets/atico.jpg' },
      { titulo: 'Planta de jade: ¿cómo cuidarla para disfrutar de sus beneficios?', imagen: 'assets/planta.jpg' }
    ]
  };

  // 📌 Getter para filtrar noticias según la categoría seleccionada
  get noticiasFiltradas(): { titulo: string; imagen: string }[] {
    return this.noticias[this.categoriaSeleccionada] || [];
  }

  // 🎯 Método para cambiar la categoría de noticias
  seleccionarCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
  }
}
