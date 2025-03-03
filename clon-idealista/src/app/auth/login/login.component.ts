import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor() {}

  onSubmit() {
    console.log('Formulario enviado');
    console.log('Email:', this.email);
    console.log('Contraseña:', this.password);

    // Aquí puedes añadir la lógica para manejar el inicio de sesión, como la validación o enviar los datos al backend.
  }
}

