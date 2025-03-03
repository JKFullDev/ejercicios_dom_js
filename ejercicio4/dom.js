// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click
let boton = document.querySelector("#btnToClick");

function hacerClick(event) {
    console.log('Info evento: ', event);
}

boton.setAttribute("onclick", "hacerClick(event)");


// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
let inputFocus = document.querySelector(".focus");

inputFocus.onfocus = function (event) {
    console.log('Valor del input en focus:', this.value);
};


// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
let inputValue = document.querySelector(".value");

inputValue.oninput = function (event) {
    console.log('Valor del input en input:', this.value);
};