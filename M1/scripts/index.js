class Actividad {
  constructor(id, titulo, descripcion, urlImagen) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.urlImagen = urlImagen;
  }
}

class Repositorio {
  constructor() {
    this.actividades = [];
    this.id = 0;
  }

  agregarActividad(titulo, descripcion, urlImagen) {
    const id = this.id++;
    const actividad = new Actividad(id, titulo, descripcion, urlImagen);
    this.actividades.push(actividad);
  }

  getActividades() {
    return this.actividades;
  }

  delete(id) {
    this.actividades = this.actividades.filter((act) => act.id !== id);
  }
}

const repo = new Repositorio();

repo.agregarActividad("Hola", "saludo", "asdsadasdas");
repo.agregarActividad("correr", "deporte", "asdasdas");
repo.agregarActividad("correr2", "deporte2", "asdasdas");

console.log(repo.getActividades());

repo.delete(1);

console.log(repo.getActividades());

// // funciones.js
// function obtenerLink() {
//   var link = document.getElementById("linkInput").value;

//   //--- Aca deberia cargar la imagen...
//   alert("El enlace ingresado es: " + link);
// }

// //----------Capturando datos-------------------
// const formulario = document.querySelector("#formulario");

// formulario.addEventListener("submit", validarFormulario);

// function validarFormulario(e) {
//   e.preventDefault();
//   const titulo = document.querySelector("#titulo").value;
//   const descripcion = document.querySelector("#descripcion").value;

//   const respuesta = document.getElementById;
//   console.log(titulo, descripcion);
// }
