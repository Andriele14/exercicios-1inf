const prompt = require("prompt-sync")();

const produto = {
    nome: prompt("Nome do produto: "),
    preco: Number(prompt("Preço: ")),
    estoque: Number(prompt("Estoque: "))
};

const aumento = Number(prompt("Aumento no preço: "));

produto.preco += aumento;

console.log("Novo preço:", produto.preco);

module.exports = produto;