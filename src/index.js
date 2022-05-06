import style from "./style.scss";
import foto from "./assets/photo.jpg";
import { mostrarAlerta } from "./componentes/alert";

const arreglo = [1, 2, 3, 4];
const code = () => {
  console.log(...arreglo);
};

console.log("Hola mundo sin configuracion con webpack");
code();

document.getElementById("app").innerHTML = `<img src="${foto}" alt="crush">`;
mostrarAlerta("Hola mundo");
