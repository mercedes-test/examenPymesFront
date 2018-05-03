import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { APP_ROUTING } from './app.routes';

//servicios
import { PerfilesService } from './services/perfiles.service';

import { AppComponent } from './app.component';
import { PerfilesComponent } from './listar/perfiles.component';
import { PerfilComponent } from './guardar/perfil.component';
import { DetalleComponent } from './detalle/detalle.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { ActualizarComponent } from './actualizar/actualizar.component';


@NgModule({
  declarations: [
    AppComponent,
    PerfilesComponent,
    PerfilComponent,
    DetalleComponent,
    EliminarComponent,
    ActualizarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    PerfilesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
