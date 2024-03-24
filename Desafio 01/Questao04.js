const numeros = [23, 16, 11, 8, 19, 14, 5, 21];
let numerosPrimos = [];

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 == true){
        numerosPrimos.push(numeros[i]);
    }
}

console.log(`Os números primos são: ${numerosPrimos.join(', ')}`);