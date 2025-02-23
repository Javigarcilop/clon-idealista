import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:5000/api/'; // Cambia esta URL según tu configuración

  constructor(private http: HttpClient) {}

  // Obtener propiedades
  getPropiedades(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}propiedades`);
  }

  // Agregar nueva propiedad
  addPropiedad(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}propiedades`, data);
  }

  // Obtener usuarios
  getUsuarios(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}usuarios`);
  }

  // Agregar nuevo usuario
  addUsuario(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}usuarios`, data);
  }
}
