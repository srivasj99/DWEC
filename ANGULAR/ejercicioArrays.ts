let numeros: Array<number> = [];
let suma: number = 0;
let impares: Array<number> = [];
let media:number;
let mayor:number=100;
let menor:number=0;
let posmenor:number=0;
let posmayor:number=0;

for(var i = 0; i< 20 ;i++ ){
    let n = Math.floor(Math.random() * 100);
    numeros.push(n);
}
console.log("mayor y menor numero")
for(var i = 0; i< numeros.length ;i++ ){
    if(numeros[i] <= menor){
        menor = numeros[i];
        posmenor = i;
    }else if(numeros[i] >= mayor){
        mayor = numeros[i];
        posmayor = i;
    }
}
console.log("Numero mayor:", mayor, ", posicion:", posmayor)
console.log("Numero menor:", menor, ", posicion:", posmenor)
console.log("Array de numeros")
console.log(numeros);
/* MEDIA */
for(i = 0; i < numeros.length; i++){
    suma += numeros[i];
}
media = suma/numeros.length;
console.log("La media");
console.log(media);

/* ORDENADO */
console.log("Array ordenado");
numeros.sort();
console.log(numeros)

console.log("Primos")
/*ARRAY PRIMOS*/
for(i = 0; i < numeros.length; i++){
    if(numeros[i]%2 == 1){
        impares.push(numeros[i]);
    }
}

console.log(impares);
  