// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
let ulCountries = document.createElement("ul");
for (const country of countries) {
    let liCountry = document.createElement("li");
    liCountry.innerHTML = country;
    ulCountries.appendChild(liCountry);
}
document.body.appendChild(ulCountries);
console.log('Ul paises: ', ulCountries);


// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
let elementoParaEliminar = document.querySelector(".fn-remove-me");
elementoParaEliminar.remove();


// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
let divConAtributo = document.querySelector('[data-function="printHere"]');
let ulCars = document.createElement("ul");
for (const car of cars) {
    let liCar = document.createElement("li");
    liCar.innerHTML = car;
    ulCars.appendChild(liCar);
}
divConAtributo.appendChild(ulCars);
console.log('Div con ul ', divConAtributo);


// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const countriesPhotos = [
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];
//COMENTADO PARA VER QUE FUNCIONA CORRECTAMENTE EL 1.6
// for (const photo of countriesPhotos) {
//     let div = document.createElement("div");
//     document.body.appendChild(div);

//     let titulo = document.createElement("h4");
//     titulo.innerHTML = photo.title;
//     div.appendChild(titulo);

//     let foto = document.createElement("img");
//     foto.src = photo.imgUrl;
//     div.appendChild(foto);

//     console.log(div);
// }

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la serie de divs.
let boton = document.createElement("button");
boton.innerText = "Eliminar Ultimo div"
document.body.appendChild(boton);

function borrarUltDiv() {
    let ultimoDiv = document.querySelector("div:last-of-type");
    ultimoDiv.remove();
}

boton.setAttribute("onclick", "borrarUltDiv()");


// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// divs que elimine ese mismo elemento del html.
for (const photo of countriesPhotos) {
    let div = document.createElement("div");
    document.body.appendChild(div);

    let titulo = document.createElement("h4");
    titulo.innerHTML = photo.title;
    div.appendChild(titulo);

    let foto = document.createElement("img");
    foto.src = photo.imgUrl;
    div.appendChild(foto);

    console.log(div);

    let botonEspecifico = document.createElement("button");
    botonEspecifico.innerText = "Eliminar";
    div.appendChild(botonEspecifico);

    // Función para eliminar el div padre (el div que contiene este botón)
    botonEspecifico.onclick = function () {
        div.remove();
    };
}






