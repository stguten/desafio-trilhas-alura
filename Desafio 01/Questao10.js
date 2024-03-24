const frase = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";
let count = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i] == frase[i].toUpperCase() && frase[i] != frase[i].toLowerCase()) {
        count++;
    }
}

console.log(`O número de letras maiúsculas na string é: ${count}`);