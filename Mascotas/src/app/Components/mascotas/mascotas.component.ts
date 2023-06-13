import { Component } from '@angular/core';
import { Mascotas } from 'src/app/Models/Mascotas';
import { MascotasService } from 'src/app/Services/Mascotas.service';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.scss']
})
export class MascotasComponent {

  mascota:Mascotas  = new Mascotas();
  ObtenerMascotas:any=[];

  constructor(private Service:MascotasService){}


  ngOnInit(): void {
    this.GetMascotas();
  }

  GetMascotas(){
    this.Service.ObtenerMascotas().subscribe(res => {
      this. ObtenerMascotas  = res;
    });
  }

  AddMascota(mascota:Mascotas):void{
    this.Service.AgragarMascotas(mascota).subscribe(res => {
        this.clearFormulario();
        this.GetMascotas();
    });
    this.clearFormulario();
  }

  UpdateMascota(mascota:Mascotas):void{
    this.Service.ActualizarMascotas(mascota.id, mascota).subscribe(res => {
        this.clearFormulario();
        this.GetMascotas();


    });
  }

  DeleteMascota(id:number):void{
    this.Service.EliminarMascotas(id).subscribe(res => {
        this.clearFormulario();
        this.GetMascotas();
    });
  }

  SetData(select:Mascotas){
    this.mascota.id               = select.id;
    this.mascota.nombre           = select.nombre;
    this.mascota.especie          = select.especie;
    this.mascota.raza             = select.raza;
    this.mascota.idPropietario    = select.idPropietario;
    this.mascota.fechaNacimiento  = select.fechaNacimiento;
  }

  clearFormulario(){
    this.mascota.id       = 0;
    this.mascota.nombre   = "";
    this.mascota.especie  = "";
    this.mascota.raza     = "";
    this.mascota.idPropietario  = 0;
    this.mascota.fechaNacimiento  = new Date;
  }

}
