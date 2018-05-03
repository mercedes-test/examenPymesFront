import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"
import { Perfil } from "../interfaces/perfil.interface";
import { PerfilesService } from '../services/perfiles.service';
import { Router } from  '@angular/router';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: []
})
export class PerfilComponent implements OnInit {

  perfil: Perfil ={
    "id": null,
    "nombre": null,
    "apellidoPaterno": null,
    "apellidoMaterno": null,
    "foto": null,
    "edad": null,
    "fechaNacimiento": null
  }
  constructor(public _perfilesService:PerfilesService,
    public router: Router)  {
      
    }

  guardar(){
    this._perfilesService.getAgregarPerfil(this.perfil)
    .subscribe(data=>{
      this.router.navigate(['/perfiles'])

    })
  }

  ngOnInit() {
  }

}
