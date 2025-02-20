import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'clon-idealista';
  propiedades: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // Cargar las propiedades al iniciar el componente
    this.apiService.getPropiedades().subscribe(data => {
      this.propiedades = data;
      console.log(this.propiedades); // Para verificar que los datos se cargan correctamente
    });
  }
}

 
