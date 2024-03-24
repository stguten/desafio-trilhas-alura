const numeros = [15, 8, 90, 75, 102, 6, 2];
let maiorNumero = 0;
let menorNumero = 9999;

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > maiorNumero){
        maiorNumero = numeros[i];
    }else if(numeros[i] < menorNumero){
        menorNumero = numeros[i];
    }else{
        continue;
    }
}

console.log(`O maior número é: ${maiorNumero}, e o menor número é: ${menorNumero}`);