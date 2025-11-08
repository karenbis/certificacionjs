let length;
let width;

function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);

let area = length * width;

document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

//Ejercicio de grocery store

let amount1;
let amount2;
let amount3;

function calculatetotalexpense() {
    amount1 = parseFloat(document.getElementById('amount1').value);
    amount2 = parseFloat(document.getElementById('amount2').value);
    amount3 = parseFloat(document.getElementById('amount3').value);

    let gastos = amount1 + amount2 + amount3;

    document.getElementById('resultexpense').innerText = `El total gastado es de: ${gastos}`;
}
   
