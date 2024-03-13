// console.log(tempData);

const url1 = "https://students-api.2.us-1.fl0.io/movies";
const url2 = "https://api.1rodemayo.com/movies";

$.get(url2, (data, status) => renderPeliculas(data));

const renderPeliculas = (tempData) => {
  // document.getElementById("card-container").innerHTML = "";

  tempData.forEach((pelicula) => {
    const div = document.createElement("div");
    const titulo = document.createElement("h2");
    const dir = document.createElement("h3");
    const dur = document.createElement("h3");
    const year = document.createElement("h3");
    const genero = document.createElement("h3");
    const rate = document.createElement("h3");
    const img = document.createElement("img");

    const divTarjetas = document.getElementById("card-container");

    // div.classList.add("card");

    div.className = " card card-size text-center bg-dark p-3 m-3";
    titulo.className = "mb-5";
    img.className = "img-fluid";

    // img.classList.add("card-img-top");

    //Obtengo la info del array
    titulo.innerText = pelicula.title;
    year.innerText = pelicula.year;
    dir.innerText = "Director: " + pelicula.director;
    dur.innerText = pelicula.duration;
    genero.innerText = pelicula.genre;
    rate.innerText = pelicula.rate;
    img.src = pelicula.poster;

    //Agego elementos a un div, osea una tarjeta.
    div.appendChild(titulo);
    div.appendChild(img);
    div.appendChild(dir);
    div.appendChild(dur);
    div.appendChild(year);
    div.appendChild(genero);
    div.appendChild(rate);

    //Agrego el div, osea la tarjetita, al DIV contenedor
    // de tarjetas...
    divTarjetas.appendChild(div);
  });
};

renderPeliculas();
