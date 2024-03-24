function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const dataNascimentoFormatada = new Date(dataNascimento);
    
    let idade = hoje.getFullYear() - dataNascimentoFormatada.getFullYear();
    
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();
    const mesNascimento = dataNascimentoFormatada.getMonth();
    const diaNascimento = dataNascimentoFormatada.getDate();
    
    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }
    
    return idade;
}

const dataNascimento = "1996-09-23";
const idade = calcularIdade(dataNascimento);
console.log(idade); // Exemplo de saída: 31