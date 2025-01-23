import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    HomePageComponent, // Declara el componente
  ],
  imports: [
    CommonModule,
    RouterModule, // Importa el RouterModule
    HomeRoutingModule, // Importa el módulo de rutas de Home
  ],
  exports: [
    HomePageComponent, // Exporta si es necesario
  ],
})
export class HomeModule {}

