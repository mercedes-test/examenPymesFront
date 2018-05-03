import { Component, OnInit } from '@angular/core';
import { PerfilesService } from '../services/perfiles.service'
import { ActivatedRoute } from  '@angular/router'

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit {

perfil:any;
  
constructor(public _perfilesService:PerfilesService,
            public route:ActivatedRoute) {

              this.route.params.subscribe(parametros =>{
                 this._perfilesService.getPerfil( parametros['id'])
                 .subscribe(perfil =>{
                   this.perfil = perfil})

              })
}

  ngOnInit() {
  }

}
