/*
    Determina el mayor de tres numeros:
    Declara tres variable a,b y c con valores numericos y utliza condicionales para determinar cuakl de ellos es el mayor 
*/

let a= parseInt(prompt("Ingresa el primer numero entero(a): "))
let b= parseInt(prompt("Ingresa el primer numero entero(b): "))
let c= parseInt(prompt("Ingresa el primer numero entero(c): "))

if(a>b && a>c){
    console.log(`${a} es el mayor numero`);
} else if(b>a && b>c){
    console.log(`${b}letra b es mayor`)
} else if(c>a && c<b){
    console.log(`${c} La letra c es mayor`)
} else{
    console.log("Hay un empate") 
}