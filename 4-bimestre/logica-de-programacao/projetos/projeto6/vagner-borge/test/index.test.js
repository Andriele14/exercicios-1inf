function executar(respostas) {
  jest.resetModules()

  jest.doMock("prompt-sync", () => () => () => {
    if (respostas.length === 0) {
      throw new Error("O programa fez mais perguntas do que o esperado")
    }

    return respostas.shift()
  })

  return require("../index.js")
}

const {
  vendasDaSemana,
  metaDiaria,
  metaSemanal,
  totalVendido,
  mediaVendas,
  diasAcimaDaMeta,
  melhorDia,
  situacaoSemana,
  resumo
} = executar(["5", "310", "360", "280", "340", "320", "200", "1090"])

test("RF01 - deve registrar as vendas da semana", () => {
  expect(vendasDaSemana).toEqual([310, 360, 280, 340, 320])
  expect(metaDiaria).toBe(200)
  expect(metaSemanal).toBe(1090)
})

test("RF02 - deve somar o total vendido na semana com for", () => {
  expect(totalVendido).toBe(1610)
})

test("RF03 - deve calcular a média de vendas por dia", () => {
  expect(mediaVendas).toBe(322)
})

test("RF04 - deve contar os dias acima da meta diária", () => {
  expect(diasAcimaDaMeta).toBe(5)
})

test("RF05 - deve encontrar o melhor dia de vendas", () => {
  expect(melhorDia).toBe(360)
})

test("RF06 - deve informar a situação da semana e o resumo", () => {
  expect(situacaoSemana).toBe("Meta semanal atingida")
  expect(typeof resumo).toBe("string")
})

test("Cenário extra - deve funcionar com outros valores digitados", () => {
  const extra = executar(["5", "150", "200", "250", "100", "50", "200", "800"])

  expect(extra.vendasDaSemana).toEqual([150, 200, 250, 100, 50])
  expect(extra.metaDiaria).toBe(200)
  expect(extra.metaSemanal).toBe(800)
  expect(extra.totalVendido).toBe(750)
  expect(extra.mediaVendas).toBe(150)
  expect(extra.diasAcimaDaMeta).toBe(2)
  expect(extra.melhorDia).toBe(250)
  expect(extra.situacaoSemana).toBe("Meta semanal não atingida")
  expect(extra.resumo).toContain("750")
})
