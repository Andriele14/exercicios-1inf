const prompt = require("prompt-sync")()

const quantidadeDeDias = Number(prompt("Quantidade de dias: "))
const vendasDaSemana = []

for (let i = 1; i <= quantidadeDeDias; i++) {
  vendasDaSemana.push(Number(prompt("Venda do dia " + i + ": ")))
}

const metaDiaria = Number(prompt("Meta diária: "))
const metaSemanal = Number(prompt("Meta semanal: "))

let totalVendido = 0

❓ (let i = 0; i < vendasDaSemana.length; i++) {
  totalVendido = totalVendido + vendasDaSemana[i]
}

const mediaVendas = totalVendido / vendasDaSemana.length

let diasAcimaDaMeta = 0

for (let i = 0; i < vendasDaSemana.length; i++) {
  ❓ (vendasDaSemana[i] >= metaDiaria) {
    diasAcimaDaMeta = diasAcimaDaMeta + 1
  }
}

let melhorDia = vendasDaSemana[0]

for (let i = 0; i < vendasDaSemana.length; i++) {
  if (vendasDaSemana[i] > melhorDia) {
    melhorDia = vendasDaSemana[i]
  }
}

const situacaoSemana = totalVendido >= metaSemanal ❓ "Meta semanal atingida" ❓ "Meta semanal não atingida"

const resumo = `Total: ${totalVendido}`

// NÃO FAZER NADA ABAIXO DESSA LINHA
module.exports = {
  vendasDaSemana,
  metaDiaria,
  metaSemanal,
  totalVendido,
  mediaVendas,
  diasAcimaDaMeta,
  melhorDia,
  situacaoSemana,
  resumo
}
