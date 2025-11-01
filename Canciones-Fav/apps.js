let cuerpoTabla = document.querySelector("tbody");
let inputNombre = document.querySelector("#name");
let inputAutor = document.querySelector("#author");
let inputAnio = document.querySelector("#artista");
let inputDescripcion = document.querySelector("#description");
let formulario = document.getElementById("bookForm");

let update = false; //que indica si estamos actualizando o no
let idUpdate = null; //guardar el id del libro que queremos actualizar
//Array de objetos
const listaLibros = [
  {
    id: 1,
    nombre: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anio: 1967,
    descripcion:
      "La saga de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo, una obra maestra del realismo mágico.",
  },
  {
    id: 2,
    nombre: "1984",
    autor: "George Orwell",
    anio: 1949,
    descripcion:
      "Una novela distópica que presenta un futuro totalitario bajo la vigilancia del 'Gran Hermano' y la manipulación constante de la verdad.",
  },
  {
    id: 3,
    nombre: "Un Mundo Feliz (Brave New World)",
    autor: "Aldous Huxley",
    anio: 1932,
    descripcion:
      "Una crítica social sobre una sociedad futurista que alcanza la estabilidad a través de la ingeniería genética y el condicionamiento psicológico.",
  },
  {
    id: 4,
    nombre: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    anio: 1605,
    descripcion:
      "Considerada la primera novela moderna, narra las aventuras de un hidalgo que enloquece al leer libros de caballería y decide convertirse en caballero andante.",
  },
  {
    id: 5,
    nombre: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    anio: 1943,
    descripcion:
      "Un cuento poético y filosófico que explora temas de soledad, amistad, amor y pérdida a través de la historia de un pequeño príncipe que viaja por el universo.",
  },
];

getLibros();

function getLibros(array = listaLibros) {
  cuerpoTabla.innerHTML = "";

  array.forEach((libro) => {
    let fila = document.createElement("tr");
    let celdas = `<td>${libro.nombre}</td>
                <td>${libro.autor}</td>
                <td>${libro.anio}</td>
                <td><button class="btn btn-danger btn-sm" onclick="borrarLibro(${libro.id})"><i class="bi bi-x-lg"></i></button>
                
                <button class="btn btn-warning btn-sm" onclick="cargarDatos(${libro.id})"><i class="bi bi-pencil-square"></i></button>
                </td>`;
    fila.innerHTML = celdas;

    cuerpoTabla.append(fila);
  });
}

const agregarLibro = () => {
  let id = listaLibros.at(-1).id + 1;

  const datos = {
    id,
    nombre: inputNombre.value,
    autor: inputAutor.value,
    anio: inputAnio.value,
    descripcion: inputDescripcion.value,
  };

  listaLibros.push(datos);
};

function borrarLibro(id) {
  // splice -> indice , 1
  let index = listaLibros.findIndex((libro) => libro.id === id);

  let validar = confirm(
    `Está seguro que quiere eliminar el libro ${listaLibros[index].nombre}?`
  );

  if (validar) {
    listaLibros.splice(index, 1);
    getLibros();
  }
}

//buscador
/*
datos de entrada: título del libro | algunos caracteres (3 mínimo)
proceso: Recorrer el array y comparar dato de entrada con el título de los libros (cualquier libro que incluya los caracteres)
salida: lista de libros que coincidan con la búsqueda - array[]

*/

function buscarLibros(termino = document.querySelector("#input-search").value) {
  if (termino) {
    let librosFiltrados = listaLibros.filter((libro) =>
      libro.nombre.toLowerCase().includes(termino.toLowerCase())
    );

    getLibros(librosFiltrados);
  } else {
    getLibros();
  }
}

/*
1 - cargar los datos del libro en el formulario y cambiar el título del botón
2 - tomar los datos del formulario y actualizar el libro, cargar la tabla y volver a colocar el título al botón original
*/

function cargarDatos(id) {
  update = true; //indicamos que estamos por actualizar
  let datos = listaLibros.find((libro) => libro.id === id); //todo el objeto del libro a actualizar

  inputNombre.value = datos.nombre;
  inputAnio.value = datos.anio;
  inputAutor.value = datos.autor;
  inputDescripcion.value = datos.descripcion;

  idUpdate = id; //aquí guardo el id del libro
  document.querySelector(".btn-primary").innerText = "Actualizar libro";
}

function actualizarLibro(id, valores) {
  let index = listaLibros.findIndex((libro) => libro.id === id);

  listaLibros[index].nombre = valores.nombre;
  listaLibros[index].autor = valores.autor;
  listaLibros[index].anio = valores.anio;
  listaLibros[index].descripcion = valores.descripcion;

  update = false;
  document.querySelector(".btn-primary").innerText = "Agregar libro";
}

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!update) {
    agregarLibro();
  } else {
    let valores = {
      nombre: inputNombre.value,
      autor: inputAutor.value,
      anio: inputAnio.value,
      descripcion: inputDescripcion.value,
    };

    actualizarLibro(idUpdate, valores);
  }

  formulario.reset();
  inputNombre.focus();
  getLibros();
});
