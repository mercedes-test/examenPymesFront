import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"
import { Perfil } from "../interfaces/perfil.interface";
import { PerfilesService } from '../services/perfiles.service';
import { Router } from  '@angular/router';
import { ActivatedRoute } from  '@angular/router'


@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styles: []
})
export class ActualizarComponent implements OnInit {

  perfil:any;
  
  constructor(public _perfilesService:PerfilesService,
    public route:ActivatedRoute,
    public router : Router) {

      this.route.params.subscribe(parametros =>{

        this._perfilesService.getPerfil( parametros['id'])
        .subscribe(perfil =>{
          this.perfil = perfil})

     })
}

  actualizar(){
    console.log(this.perfil);
    this._perfilesService.getActualizaPerfil(this.perfil)
    .subscribe(data=>{
      this.router.navigate(['/perfiles'])
    })
  }

  ngOnInit() {
  }

}
