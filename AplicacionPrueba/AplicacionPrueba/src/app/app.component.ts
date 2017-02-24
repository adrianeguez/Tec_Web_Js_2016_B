import {Component, OnInit} from "@angular/core";
import {Response, Http} from "@angular/http";
import {MasterURlService} from "./services/master-url.service";
import {Form, NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// CTRL A +  -  CTRL + ALT + L
export class AppComponent implements OnInit {
  title: string = "Hola Amigos";
  nombre: string = "";
  apellido: string = "";
  colorH4 = "red";
  tamanoH4 = "52px";
  classes = "btn btn-block btn-success";

  error:string = "No hay errores";

  nuevaTienda= {};

  disabledButtons = {
    NuevaTiendaFormSubmitButton:false
  }



  constructor(private _http: Http,
              private _masterURL: MasterURlService) {
    this.apellido = "Eguez";
    this.nombre = "Adrian";
    console.log("Inicio el construcor")
  }

  ngOnInit() {
    this.apellido = "Sarzosa";
    this.nombre = "Vicente";
    console.log("On Init")
  }

  nombreCompleto(): string {
    return `${this.nombre} ${this.apellido}`
  }

  hizoClick() {
    console.log("Hizo Click");
    console.log()
  }

  hizoFocus() {
    console.log("Hizo focus");
  }


  crearTienda(formulario:NgForm) {
    console.log(formulario);
    this.disabledButtons.NuevaTiendaFormSubmitButton = true;
    this._http.post(this._masterURL.url+"Tienda", {
      nombre:formulario.value.nombre
    }).subscribe(
      (res)=>{
        console.log("No hubo Errores");
        console.log(res);
        this.nuevaTienda = {};
        this.disabledButtons.NuevaTiendaFormSubmitButton = false;
      },
      (err)=>{
        this.disabledButtons.NuevaTiendaFormSubmitButton = false;
        console.log("Ocurrio un err or",err);
      },
      ()=>{
        console.log("Termino la función vamos a las casas")
      }
    );


    //
    // .post("http://localhost:1337/Tienda", formulario.valores)
    // .subscribe(
    //   res=>console.log('Respuesta: ',res),
    //   err=>console.log('Error: ',err),
    //   ()=>{
    //     console.log("Se completo la accion")
    //   }
    // );
  }
}
