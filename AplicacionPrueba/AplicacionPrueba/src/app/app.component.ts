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
  title: string = "Bienvenido a Ingresar Tiendas";
  nuevaTienda = {};
  tiendas = [];
  disabledButtons = {
    NuevaTiendaFormSubmitButton: false
  };

  constructor(private _http: Http,
              private _masterURL: MasterURlService) {
  }

  ngOnInit() {
    this._http.get(this._masterURL.url + "Tienda")
      .subscribe(
        (res: Response) => {
          this.tiendas = res.json()
            .map((value) => {
              value.formularioCerrado = true;
              return value;
            });
        },
        (err) => {
          console.log(err);
        }
      )
  }

  crearTienda(formulario: NgForm) {
    console.log(formulario);
    this.disabledButtons.NuevaTiendaFormSubmitButton = true;
    this._http.post(this._masterURL.url + "Tienda", {
      nombre: formulario.value.nombre
    }).subscribe(
      (res) => {
        console.log("No hubo Errores");
        console.log(res);
        this.tiendas.push(res.json());
        this.nuevaTienda = {};
        this.disabledButtons.NuevaTiendaFormSubmitButton = false;
      },
      (err) => {
        this.disabledButtons.NuevaTiendaFormSubmitButton = false;
        console.log("Ocurrio un err or", err);
      },
      () => {
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

  borrarTienda(id: number) {
    this._http.delete(this._masterURL.url + "Tienda/" + id)
      .subscribe(
        (res) => {
          let tiendaBorrada = res.json();
          this.tiendas = this.tiendas.filter(value => tiendaBorrada.id != value.id);
        },
        (err) => {
          console.log(err);
        }
      )
  }

  actualizarTienda(tienda: any) {
    let parametos = {
      nombre: tienda.nombre
    };
    this._http.put(this._masterURL.url + "Tienda/" + tienda.id, parametos)
      .subscribe(
        (res: Response) => {
          tienda.formularioCerrado = !tienda.formularioCerrado;
          console.log("Respuesta:", res.json());
        },
        (err) => {
          console.log("Error:", err);
        }
      )
  }


}
