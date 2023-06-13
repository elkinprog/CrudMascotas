import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Mascotas } from '../Models/Mascotas';


@Injectable({
  providedIn: 'root'
})

export class MascotasService {

  APIUrl = environment.baseURL;

  constructor(private http : HttpClient) { }


  ObtenerMascotas():Observable<Mascotas>{
    return this.http.get<Mascotas>(this.APIUrl + '/Mascota')
  }

  AgragarMascotas(data:Mascotas):Observable<Mascotas>{
    return this.http.post<Mascotas>(this.APIUrl + '/Mascota',data)
  }

  ActualizarMascotas(id:number | string,data:Mascotas) {
    return  this.http.put<Mascotas>(this.APIUrl + `/Mascota/ ${id}`,data)
  }

  EliminarMascotas(id:number|string){
    return this.http.delete<Mascotas>(this.APIUrl + `/Mascota/ ${id}`)
  }

}


