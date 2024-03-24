const numerosFrasco = [12, 5, 23, 17, 8, 14, 3, 19];

//Bubble sort
for (let i = 0; i < numerosFrasco.length - 1; i++) {
    for (let j = 0; j < numerosFrasco.length - i - 1; j++) {
        if (numerosFrasco[j] > numerosFrasco[j + 1]) {
            const temp = numerosFrasco[j];
            numerosFrasco[j] = numerosFrasco[j + 1];
            numerosFrasco[j + 1] = temp;
        }
    }
}

console.log(numerosFrasco);