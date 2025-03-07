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
      { titulo: 'Rozados: "La oferta del alquiler en Argentina se ha multiplicado por más de 12 tras derogarse el control de los precios"', imagen: 'assets/noticias-1.png' },
      { titulo: 'Collboni reaviva la polémica del 30%: niega perdón de multas y amplía casos sancionables', imagen: 'assets/noticias-2.jpeg' },
      { titulo: 'Térmica Beach, las viviendas de lujo que sí atraen al cliente nacional a la Costa del Sol', imagen: 'assets/noticias-3.jpg' }
    ],
    'Inmobiliario': [
      { titulo: 'Las ventas de viviendas rozan las 642.000 unidades en 2024, el tercer mejor dato de la historia', imagen: 'assets/noticias-1.png' },
      { titulo: 'Las casas más vistas de hoy', imagen: 'assets/noticias-2.jpeg' },
      { titulo: 'La vivienda se encarecerá más de un 10% este año en una de cada tres ciudades de España', imagen: 'assets/noticias-3.jpg' }
    ],
    'Finanzas': [
      { titulo: 'La representante alemana del BCE sugiere que se acerca una pausa en las bajadas de tipos', imagen: 'assets/finanzas-1.jpg' },
      { titulo: 'La firma de hipotecas creció un 11,2% en 2024, con más de 420.000 operaciones', imagen: 'assets/finanzas-2.jpg' },
      { titulo: 'Las leyes de PP, Sumar y Podemos para dejar exento de IRPF el SMI pasan su primer filtro en el congreso', imagen: 'assets/finanzas-3.jpg' }
    ],
    'Vacacional': [
      { titulo: 'Ni España ni Grecia, ni Italia: esta es la mejor isla de Europa según Lonely Planet', imagen: 'assets/vacaciones-1.jpg' },
      { titulo: 'Cuevas de Zugarramendi: el refugio de las brujas', imagen: 'assets/vacaciones-2.jpg' },
      { titulo: 'Cómo rentabilizar una vivienda para alquiler vacacional', imagen: 'assets/vacaciones-3.jpg' }
    ],
    'Deco': [
      { titulo: 'Se vende una lujosa villa en las colinas de Cala Mastella: estilo ibicenco y moderno con vistas al mar', imagen: 'assets/decoracion-3.jpg' },
      { titulo: 'Se vende uno de los áticos más altos del mundo por 51 millones de dólares', imagen: 'assets/decoracion-3.jpg' },
      { titulo: 'Planta de jade: ¿cómo cuidarla para disfrutar de sus beneficios?', imagen: 'assets/decoracion-3.jpg' }
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
