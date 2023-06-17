import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { MascotasComponent } from './Components/mascotas/mascotas.component';
import { EditMascotasComponent } from './Components/edit-mascotas/edit-mascotas.component';


import { MascotasService } from './Services/Mascotas.service';




@NgModule({
  declarations: [
    AppComponent,
    MascotasComponent,
    EditMascotasComponent,

  ],

  schemas:
  [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],


  providers: [MascotasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
