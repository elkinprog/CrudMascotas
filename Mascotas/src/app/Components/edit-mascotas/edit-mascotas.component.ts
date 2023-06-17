import { Component, Input } from '@angular/core';
import { take } from 'rxjs';
import { MascotasService } from 'src/app/Services/Mascotas.service';
import { Mascotas } from '../../Models/Mascotas';

@Component({
  selector: 'app-edit-mascotas',
  templateUrl: './edit-mascotas.component.html',
  styleUrls: ['./edit-mascotas.component.scss']
})
export class EditMascotasComponent {

constructor(private Service: MascotasService) {}

mascota:Mascotas  = new Mascotas();

ObtenerMascotas:any;
mascotasId:number=0;

@Input()
mascoticas: any;
id=0;
nombre   = "";
especie  = "";
raza     = "";
idPropietario  = 0;
fechaNacimiento  = new Date;


ngOnInit(): void {
  this.modelMascotas();
  this.GetMascotas()
}


modelMascotas(){
this.id               = this.id;
this.nombre           = this.nombre;
this.especie          = this.especie;
this.raza             = this.raza;
this.idPropietario    = this.idPropietario;
this.fechaNacimiento  = this.fechaNacimiento;
}

GetMascotas(){
  this.Service.ObtenerMascotas().pipe(take(1)).subscribe(res => {
    this. ObtenerMascotas  = res;
  });
}





}
