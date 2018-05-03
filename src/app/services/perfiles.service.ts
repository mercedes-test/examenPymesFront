import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/Rx';

import { Observable } from 'rxjs/Observable';
import { Perfil } from '../interfaces/perfil.interface';

@Injectable()
export class PerfilesService {

  
  constructor(private  http:HttpClient) { }
  perfiles:any[] = [];
  perfil:any;


  
  getPerfiles(): Observable <any>{
    let urlPerfiles ='http://localhost:8082/perfiles';
    
    return this.http.get(urlPerfiles)
         .map(( resp: any ) => {
            
            this.perfiles = resp.data.listPerfilesResponse;
            return this.perfiles;
         }

         );
  }


  getPerfil( id :string): Observable <any>{
    let url ='http://localhost:8082/perfil';
    
    let urlPerfil = `${url}/${id}.json`;
    
    return this.http.get( urlPerfil )
    .map(( resp: any ) => {
      return resp.data;
   });
  }


  getEliminarPerfil( id :string): Observable <any>{
    let url ='http://localhost:8082/eliminarPerfil';
    
    let urlPerfil = `${url}/${id}.json`;
    
    return this.http.delete( urlPerfil )
    .map(( resp: any ) => {
      return resp.data;
   });
  }



  getAgregarPerfil(perfil: Perfil): Observable <any>{
    let url ='http://localhost:8082/agregaPerfil';
    let body = JSON.stringify( perfil);
    let  headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });

    return this.http.post( url , body, {headers})
    .map(( resp: any ) => {
      return resp;
   });
  }


  getActualizaPerfil(perfil: Perfil): Observable <any>{
    let url ='http://localhost:8082/actualizarPerfil';
    let body = JSON.stringify( perfil);
    let  headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });

    return this.http.put( url , body, {headers})
    .map(( resp: any ) => {
      return resp;
   });
  }
}
