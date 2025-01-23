import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent, // Declara el componente raíz
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Importa las rutas principales
  ],
  providers: [],
  bootstrap: [AppComponent], // Inicia con AppComponent
})
export class AppModule {}

