import { Component } from '@angular/core';
import { take } from 'rxjs';
import { Mascotas } from 'src/app/Models/Mascotas';
import { MascotasService } from 'src/app/Services/Mascotas.service';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.scss']
})
export class MascotasComponent {

  mascota:Mascotas  = new Mascotas();

  mascoticas:any;
  activatedAdd:boolean= false;
  ObtenerMascotas:any=[];

  constructor(private Service:MascotasService){}

  ngOnInit(): void {
    this.GetMascotas();
  }

  GetMascotas(){
    this.Service.ObtenerMascotas().pipe(take(1)).subscribe(res => {
      this. ObtenerMascotas  = res;
    });
  }

  AddMascota(mascota:Mascotas):void{
    this.Service.AgragarMascotas(mascota).pipe(take(1)).subscribe(res => {
        this.GetMascotas();
    });
    this.clearFormulario();
  }

  UpdateMascota(mascota:Mascotas):void{
    this.Service.ActualizarMascotas(mascota.id, mascota).pipe(take(1)).subscribe(res => {
        this.GetMascotas();
    });
    this.clearFormulario();
  }

  DeleteMascota(mascota:Mascotas):void{

    if(confirm("Está seguro que desea eliminar este registro")){
      this.Service.EliminarMascotas(mascota.id).pipe(take(1)).subscribe(res => {

        
        this.clearFormulario();
        this.GetMascotas();
        this.SetData(this.mascota);
      });
    }


  }

  SetData(mascot:Mascotas){
    this.mascota.id               = mascot.id;
    this.mascota.nombre           = mascot.nombre;
    this.mascota.especie          = mascot.especie;
    this.mascota.raza             = mascot.raza;
    this.mascota.idPropietario    = mascot.idPropietario;
    this.mascota.fechaNacimiento  = mascot.fechaNacimiento;
  }

  clearFormulario(){
    this.mascota.id       = 0;
    this.mascota.nombre   = "";
    this.mascota.especie  = "";
    this.mascota.raza     = "";
    this.mascota.idPropietario  = 0;
    this.mascota.fechaNacimiento  = new Date;
  }

  modalAdd(){
    this.mascoticas = {
      id:0,
      nombre:"",
      especie:"",
      raza:"",
      idPropietario: 0,
      fechaNacimiento:new Date,
    }
  }

}
