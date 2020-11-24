import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { DatosComponent } from './components/datos/datos.component';
import { RightComponent } from './components/right/right.component';
import { PaisComponent } from './components/pais/pais.component';
import { PeruComponent } from './components/peru/peru.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostComponent } from './components/post/post.component';
import { BarraSocialComponent } from './components/barra-social/barra-social.component';

//servicios
import { FormsModule } from "@angular/forms";
import { PaisesService } from "./servicios/paises.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    DatosComponent,
    RightComponent,
    PaisComponent,
    PeruComponent,
    FooterComponent,
    PostComponent,
    BarraSocialComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PaisesService,MenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
