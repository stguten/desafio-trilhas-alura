const numero = 12;
let resultadoFatorial = 1;

for(let i = 12; i >= 1; i--){
    resultadoFatorial *= i;
}

console.log(`O fatorial de ${numero} é: ${resultadoFatorial}`);