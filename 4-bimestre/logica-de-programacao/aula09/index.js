
const prompt = require("prompt-sync")();

const quantidadeVendas = Number(prompt("Quantas vendas? "));

const vendasDaSemana = [];

for (let i = 1; i <= quantidadeVendas; i++) {
    const venda = Number(prompt(`Venda ${i}: `));
    vendasDaSemana.push(venda);
}

let menorVenda = vendasDaSemana[0];

for (let i = 1; i < vendasDaSemana.length; i++) {
    if (vendasDaSemana[i] < menorVenda) {
        menorVenda = vendasDaSemana[i];
    }
}

module.exports = menorVenda;
