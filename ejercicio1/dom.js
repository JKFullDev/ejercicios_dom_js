// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
let boton = document.querySelector(".showme");
console.log('Boton: ', boton);


// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
let h1 = document.querySelector("#pillado");
console.log('H1: ', h1);


// 1.3 Usa querySelector para mostrar por consola todos los p
let parrafos = document.querySelectorAll("p");
console.log('Parrafos: ', parrafos);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con
// 	la clase.pokemon
let pokemons = document.querySelectorAll(".pokemon");
console.log('Pokemons: ', pokemons);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con
// el atributo data-function="testMe".
let elementos = document.querySelectorAll('[data-function="testMe"]');
console.log('Elementos: ', elementos);


// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
// data-function="testMe".
let tercerElemento = elementos[2];
console.log('Tercer elemento: ', tercerElemento);