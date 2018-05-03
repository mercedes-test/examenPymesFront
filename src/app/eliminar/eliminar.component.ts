import { Component, OnInit } from '@angular/core';
import { PerfilesService } from '../services/perfiles.service'
import { ActivatedRoute } from  '@angular/router'
import { Router } from  '@angular/router'

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styles: []
})
export class EliminarComponent implements OnInit {

  perfil:any;
  
constructor(public _perfilesService:PerfilesService,
            public route:ActivatedRoute,
            public router:Router  ) {

              this.route.params.subscribe(parametros =>{
                 this._perfilesService.getEliminarPerfil( parametros['id'])
                 .subscribe(perfil =>{
                   this.router.navigate(['/perfiles'])
                  })

              })
}

  ngOnInit() {
  }

}
