import { Component, OnInit } from '@angular/core';
import { PerfilesService } from '../services/perfiles.service'

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styles: []
})
export class PerfilesComponent implements OnInit {

  constructor(private _perfilesService:PerfilesService) {
     this._perfilesService.getPerfiles()
     .subscribe( perfiles =>{
       console.log(perfiles);
       console.log(perfiles.foto);
       
     })

   }

  ngOnInit() {
  }

}
