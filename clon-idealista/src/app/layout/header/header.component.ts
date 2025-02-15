import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    console.log("Dropdown abierto:", this.dropdownOpen); // Verifica en consola si cambia
  }

  changeLanguage(lang: string) {
    console.log(`Cambiando idioma a: ${lang}`);
    this.dropdownOpen = false;
  }
}
