// let edad = Number(prompt("Ingrese su edad"))

// if (edad >= 18) {
//     console.log("Puede pasar al cheboli")
// }
// else {
//     console.log("No puede pasar al cheboli")
// }


// let nombre = prompt("Nombre:")

// if (nombre && isNaN(nombre)) {
//     console.log("Escribio un nombre:")
// }
// else {
//     console.log("No escribio el nombre de forma correcta")
// }

// let rica = true
// let tiempoEspera = 10
// if (rica && tiempoEspera  <= 30) {
//     console.log("Me quedo a comer")
// }
// else {
//     console.log("No me quedo")
// }


// let dinero= prompt("Cantidad de dinero:")
// if (dinero < 3000 ) {
//     console.log("Es barato")
// }
// else {
//     console.log("Es caro")
// }


// let n1 = prompt("N1:")
// let n2 = prompt("N2:")
// let n3 = prompt("N3:")

// if (n1 > n2)  {
//     console.log("Es el N1:",n1)
// }
// if (n2 > n3) {
//     console.log("Es el N2:",n2)
// }
// else {
//     console.log("Es el N3:",n3)
// }

// let n1 = parseInt(prompt("Ingrese numero 1: "));
// let n2 = parseInt(prompt("Ingrese numero 2: "));
// let n3 = parseInt(prompt("Ingrese numero 3: "));
// let mayor 
// let t 



// numero1=parseInt(numero1);
// numero2=parseInt(numero2);
// numero3=parseInt(numero3);


//    if (numero1 > numero2 && numero1 > numero3){
//         document.write("Numero 1º",numero1);
//    } else {
//       if (numero2 > numero3){
//          if (numero2 > numero1){
//             document.write("Numero 1 es Mayor y vale: "+numero2+".");
//          }else{
//                document.write("Numero 3 es Mayor y vale: "+numero3+".");
//          }
//       } else {
//          document.write("Numero 2 es Mayor y vale: "+numero2+".");
//       }
//     } 
//       document.write("<br /><br />Numero 1 = "+numero1+"<br />"+"Numero 2 = "+numero2+"<br />"+"Numero 3 = "+numero3);

// if (n1 > n2) {
//     t = n1;
// }else { 
//     t = n2;
// }
// if (t > n3) {
//     mayor  = t
// }else{
//     mayor = n3
// }

// document.write(mayor)

// for (let i = 0; i <= 10; i+=1){
//     document.write(i)
// } 

// Only numbers pair at 2 20
// for (let i=2; i <=20; i+=2){
//     document.write(i)

// }
// document.write("                                  - ")
// for (let i=1; i <=19; i+=2)
// {   
//     document.write(i)

// }


// bucle while
/* Crear una calculadora:
Solicitaremos al usuario una decision 'Si desea usar la calculadora escriba SI'
Luego si se presiono SI, se solcitara una operacion y 2 numeros, y se resolvera segun la operacion correspondiente (+ o -)
Si la operacion no existe entonces se dira 'ERROR: operacion no valida'
Al finalizar el programa de la calculadora se volvera a solictar una decision que dira 'Escriba SI si desea usar la calculadora
 */
// let operacion = prompt("Desea usar la calculadora:")
// let n1 = Number(prompt("Ingrese N1º:"))
// let n2 = Number(prompt("Ingrese N2º:"))

// while (operacion ===  "si"){
//     tarea = prompt("Operacion:")
//     if(tarea === "+"){
//         alert("El resultado es:",n1+n2)
//     }
//     else if (tarea === "-"){
//         alert("El resultado es:",n1-n2)
//     }
//     else {
//         alert("ERROR: operacion no valida");
//     }
//     operacion = prompt("Desea continuar con las operaciones:")
// } 

// alert("La calculadora ah finalizado")


// let decision = prompt('Si desea usar la calculadora escriba SI')
// while(decision === 'SI'){
//     let operacion = prompt('Elija una operación (+ - * /)')
//     let a = Number(prompt('Ingrese un número'))
//     let b = Number(prompt('Ingrese otro número'))
    
//     if(operacion === "+" || operacion === "sumar"){
//         alert("El resultado de " + a + " + " + b + " es " + (a + b))
//     }
//     else if(operacion === "-" || operacion ===  "restar"){
//         alert("El resultado de " + a + " - " + b + " es " + (a - b))
//     }
//     else if(operacion === "*" || operacion ===  "multiplicar"){
//         alert("El resultado de " + a + " * " + b + " es " + (a * b))
//     }
//     else if(operacion === "/" || operacion ===  "dividir"){
//         alert("El resultado de " + a + " / " + b + " es " + (a % b))
//     }
//     else{
//         alert("ERROR: operacion no valida")
//     }

//     decision = prompt('Escriba SI si desea usar la calculadora')
// }

// alert("La calculadora a finalizado")

const listaDeJugadores = [ 'Messi', 'Modric', 'Otamendi', 'Di Maria', 'Vinicius', 'Neymar', 'Burruchaga']
const listaDeJugadores2 = [ 'Messi', 'Modric', 'Otamendi', 'Di Maria', 'Vinicius', 'Neymar', 'Burruchaga']


/* 
Se debera eliminar a Neymar y se agregara al principio del array
Se debera reemplazar a Di Maria por Ronaldo
Se agregara despues de Modric a 'Serre7'
*/


// Esta solucion trae el problema de que al alterarse los indices del array no funciona correctament
// listaDeJugadores2.splice(5,1)
// listaDeJugadores2.unshift("Neymar")
// listaDeJugadores2.splice(4,1,"Ronaldo")
// listaDeJugadores2.splice(2,0,"Serre7")


// Esta solucion si funciona de manera correcta
// let posiciondeneymar = listaDeJugadores.indexOf("Neymar")
// listaDeJugadores.splice(posiciondeneymar,1)
// listaDeJugadores.unshift("Neymar") 

// let posicionDeDimaria = listaDeJugadores.indexOf('Di Maria')
// listaDeJugadores.splice(posicionDeDimaria, 1, 'Ronaldo')

// let posicionModric = listaDeJugadores.indexOf('Modric')
// listaDeJugadores.splice((posicionModric + 1),0,'CR7')


// const listaDeJugadores3 = [ 'Messi', 'Modric', 'Otamendi', 'Di Maria', 'Vinicius', 'Neymar', 'Burruchaga', 'Ortega'] 

// /* Mostrar por consola a todos los nombres que empiecen con la letra O */

// for (let i = 0; i < listaDeJugadores3.length;  i=i+1){
//     if(listaDeJugadores3[i][0] === "O"){
//         document.write(listaDeJugadores3[i]," ~ ")
//     }
// }


// const mensajes = [
//     'buen dia',
//     'todo bien?',
//     'no estoy a gusto, bobo',
//     'Anda pa alla bobo'
// ] 
// const mensajesOfensivos = []

// Dos formas de hacer los mismo
// for(let i = 0; i < mensajes.length; i = i + 1){
//     let mensaje = mensajes[i]
//     if(mensaje.includes('bobo')){
//         console.log("El mensaje " + mensaje + ' contiene la palabra ofensiva, "bobo"')
//         mensajesOfensivos.push(mensaje)
//     }
// }
// segunda forma - con un for of 
// for (let mensaje of mensajes){
//     if(mensaje.includes('bobo')){
//         console.log("El mensaje " + mensaje + ' contiene la palabra ofensiva, BOBO')
//         mensajesOfensivos.push(mensaje)
//     }
// }


var table = document.getElementsByTagName("tr")
var titulo = document.getElementsByTagName("h1")

function dibujar(){
    i =0;

    titulo[0].style.color="green";

    var recorrido = setInterval(() => {
        if(i < table.length){
            table[i].style.display="table-row";
        }
        else {
            clearInterval(recorrido);
        }
    }, 100);
}

function modoDiurno(){
    document.body.style.backgroundColor = "lightslategrey";
    for(let i = 1; i < table.length; i++){
        table[i].style.color = "black";
    
        if (i%2 == 0){
            table[i].style.backgroundColor = "palevioletred";
        }
        else {
            table[i].style.backgroundColor = "pink";
        }
    }
}

function modoNocturno(){
    document.body.style.backgroundColor = "darkslategrey"

    for(let i = 1; i < table.length; i++){
        table[i].style.color = "white";
        if (i%2 == 0){
            table[i].style.backgroundColor = "grey";
        }
        else {
            table[i].style.backgroundColor = "black";
        }
    }
}


let x = prompt('Ingrese la cantidad base');
let y = prompt('Ingrese la cantidad techo');
while ( x <= y){
    document.write(`${x}`); x++;
}