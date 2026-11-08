const prompt = require("prompt-sync")()

const limiteEstoqueBaixo = Number(prompt("Limite de estoque baixo: "))
const quantidadeProdutos = Number(prompt("Quantidade de produtos: "))

const catalogo = []

for (let i = 1; i <= quantidadeProdutos; i++) {
    const nome = prompt(`Produto ${i} - nome: `)
    const preco = Number(prompt(`Produto ${i} - preço: `))
    const estoque = Number(prompt(`Produto ${i} - estoque: `))

    catalogo.push({
        nome,
        preco,
        estoque
    })
}

console.log("Catálogo:")

for (let i = 0; i < catalogo.length; i++) {
    console.log(
        `${i + 1}. ${catalogo[i].nome} - preço ${catalogo[i].preco} - estoque ${catalogo[i].estoque}`
    )
}

console.log(`Limite de estoque baixo: ${limiteEstoqueBaixo}`)

const nomeReajuste = prompt("Reajuste - nome do produto: ")
const aumento = Number(prompt("Reajuste - aumento: "))

for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].nome === nomeReajuste) {
        const precoAntes = catalogo[i].preco

        catalogo[i].preco += aumento

        console.log(`Preço antes: ${precoAntes}`)
        console.log(`Preço depois: ${catalogo[i].preco}`)
    }
}

let produtoMaisCaro = ""

if (catalogo.length > 0) {
    let maiorPreco = catalogo[0].preco
    produtoMaisCaro = catalogo[0].nome

    for (let i = 1; i < catalogo.length; i++) {
        if (catalogo[i].preco > maiorPreco) {
            maiorPreco = catalogo[i].preco
            produtoMaisCaro = catalogo[i].nome
        }
    }
}

let estoqueTotal = 0

for (let i = 0; i < catalogo.length; i++) {
    estoqueTotal += catalogo[i].estoque
}

let produtosComEstoqueBaixo = 0

for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].estoque <= limiteEstoqueBaixo) {
        produtosComEstoqueBaixo++
    }
}

const resumo = `
===== RESUMO DO CATÁLOGO =====
Produto mais caro: ${produtoMaisCaro}
Estoque total: ${estoqueTotal}
Produtos com estoque baixo: ${produtosComEstoqueBaixo}
`

console.log(resumo)

module.exports = {
    catalogo,
    limiteEstoqueBaixo,
    produtoMaisCaro,
    estoqueTotal,
    produtosComEstoqueBaixo,
    resumo
}