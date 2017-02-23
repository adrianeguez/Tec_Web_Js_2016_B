import {Component, OnInit} from "@angular/core";

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

  constructor() {
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
}
