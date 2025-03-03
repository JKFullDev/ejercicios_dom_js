// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
let divVacio = document.createElement("div");
document.body.appendChild(divVacio);
console.log('Div vacío: ', divVacio);


// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let divConP = document.createElement("div");
let p = document.createElement("p");
divConP.appendChild(p);
document.body.appendChild(divConP);
console.log('Div con p: ', divConP);


// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// 	loop con javascript.
let div6p = document.createElement("div");
for (let i = 0; i < 6; i++) {
    let p = document.createElement("p");
    div6p.appendChild(p);
}
document.body.appendChild(div6p);
console.log('Div con 6 p: ', div6p);


// 2.4 Inserta dinamicamente con javascript en un html una p con el
// 	texto 'Soy dinámico!'.
let soyDinamico = document.createElement("p");
soyDinamico.innerText = "¡Soy dinámico!";
document.body.appendChild(soyDinamico);
console.log('Soy dinamico', soyDinamico);


// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let h2modificado = document.querySelector(".fn-insert-here");
h2modificado.innerText = 'Wubba Lubba dub dub';
console.log('H2 modificado: ', h2modificado);

// 2.6 Basandote en el siguiente array crea una lista ul > li con
// los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let ulApps = document.createElement("ul");
for (const app of apps) {
    let liApp = document.createElement("li");
    liApp.innerHTML = app;
    ulApps.appendChild(liApp);
}
document.body.appendChild(ulApps);
console.log('Ul de apps: ', ulApps);


// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let elementosParaEliminar = document.querySelectorAll(".fn-remove-me").forEach(e => e.remove());


// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
let divs = document.querySelectorAll("div");
let voyEnMedio = document.createElement("p");
voyEnMedio.innerText = "¡Voy en medio!";
divs[1].insertBefore(voyEnMedio, divs[1].firstChild);


// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// 	.fn-insert-here
let divConClase = document.querySelectorAll(".fn-insert-here");
divConClase.forEach(e => {
    let voyDentro = document.createElement("p");
    voyDentro.innerText = "¡Voy dentro!";
    e.appendChild(voyDentro);
});


