//calculadora gasolina

// VARIABLES

//Precio combustible

let precioLC = Number(prompt('Precio de combustible que utiliza su coche en su páis,\n solo numeros Ej. 1.95'));
if(precioLC == ''){
    alert('Por favor indique un precio');
    let precioLC = Number(prompt('A que precio esta el litro de combustible que utiliza su coche en su páis,\n solo numeros Ej. 1.95'));
}

//Km de distancia
let distancia = Number(prompt('Indique los Km que va a realizar'));
if(distancia == ''){
    alert('Por favor indique un numero mayor que 0');
    let distancia = Number(prompt('Indique los Km que va a realizar'));
}
// Medida cada 100
let aLos100 = (distancia / 100);

//Consumo coche
let consumCoche = Number(prompt('Indique los litros promedio de consumo de su coche cada 100km'));
if(consumCoche == ''){
    alert('Por favor indique un numero mayor que 0');
    let consumCoche = Number(prompt('Indique los litros promedio de consumo de su coche cada 100km'));
}

// FUNCIONES


// Determinar coste añadido por nº de pasasajeros
 


function pesoTotalPers() {
let cantP = Number(prompt('Indique el numero de personas que viajan de 1 al 5'));
if ((cantP == '') && ((cantP < 0) || (cantP > 5))) {
    console.log('Por favor indique un numero del 1 al 5');
    let cantP = Number(prompt('Indique el numero de personas que viajan de 1 al 5'));

}
else {
    return costePesoPasajeros = (cantP * 0.45) * aLos100;
}

}

pesoTotalPers();
//Lleva equipaje ¿? y coste si lo lleva

function esquipaje(){
let equip = prompt('Indique el si lleva o no equipaje, escriba "SI" o "NO"');
if (equip === 'SI') {
    return costeEquip =  0.30 * aLos100;

}
else if (equip === 'NO'){
return costeEquip = 0;
} else {
    alert('Por favor, debe indicar en Mayuscualas "SI" o "NO", gracias');
}
}

esquipaje();

// Consumo total:

function totalConsum(){
    let resultado = ((aLos100 * consumCoche) * precioLC) + (aLos100 * costePesoPasajeros) 
    + (aLos100 * costeEquip );
    alert(resultado);
}

totalConsum(alos100, consumCoche, precioLC, costePesoPasajeros, costeEquip);

//MENU 1