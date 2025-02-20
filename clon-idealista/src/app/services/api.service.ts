import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost/clon-idealista-api/propiedades.php';

  constructor(private http: HttpClient) {}

  getPropiedades(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
