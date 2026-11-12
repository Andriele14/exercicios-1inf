
const prompt = require("prompt-sync")()

const limiteEstoqueBaixo = Number(prompt("Limite de estoque baixo: "))
const quantidadeProdutos = Number(prompt("Quantidade de produtos: "))

const catalogo = []

for (let i = 0; i < quantidadeProdutos; i++) {
    const nome = prompt("Nome: ")
    const preco = Number(prompt("Preço: "))
    const estoque = Number(prompt("Estoque: "))

    catalogo.push({ nome, preco, estoque })
}

let produtoMaisCaro = catalogo[0]
let estoqueTotal = 0
let produtosComEstoqueBaixo = 0

for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].preco > produtoMaisCaro.preco) {
        produtoMaisCaro = catalogo[i]
    }

    estoqueTotal += catalogo[i].estoque

    if (catalogo[i].estoque <= limiteEstoqueBaixo) {
        produtosComEstoqueBaixo++
    }
}

const produtoReajustado = prompt("Reajuste - nome do produto: ")
const aumento = Number(prompt("Reajuste - aumento: "))

for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].nome === produtoReajustado) {
        catalogo[i].preco += aumento
    }
}

const resumo = `Produto mais caro: ${produtoMaisCaro.nome}
Estoque total: ${estoqueTotal}
Produtos com estoque baixo: ${produtosComEstoqueBaixo}`

console.log(resumo)

module.exports = {
    catalogo,
    limiteEstoqueBaixo,
    produtoMaisCaro: produtoMaisCaro.nome,
    estoqueTotal,
    produtosComEstoqueBaixo,
    resumo
}
