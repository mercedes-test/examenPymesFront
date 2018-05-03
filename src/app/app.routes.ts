import { RouterModule, Routes } from '@angular/router';
import { PerfilesComponent } from './listar/perfiles.component';
import { PerfilComponent } from './guardar/perfil.component';
import { DetalleComponent } from './detalle/detalle.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { ActualizarComponent } from './actualizar/actualizar.component';


const app_routes: Routes = [
    { path: 'perfiles', component: PerfilesComponent},
    { path: 'detalle/:id/:pag', component: DetalleComponent},  
    { path: 'eliminar/:id/:pag', component: EliminarComponent},        
    { path: 'perfil/:id', component: PerfilComponent}, 
    { path: 'actualizar/:id/:pag', component: ActualizarComponent},     
    { path: '**', pathMatch: 'full', redirectTo: 'perfiles'}
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);

