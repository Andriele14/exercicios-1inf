const prompt = require("prompt-sync")();

// RF01 - Dados da semana
const quantidadeDeDias = Number(prompt("Quantidade de dias: "));
const metaDiaria = Number(prompt("Meta diária: "));
const metaSemanal = Number(prompt("Meta semanal: "));

// RF02, RF04 e RF05 - Total, dias acima da meta e melhor dia
let totalVendido = 0;
let diasAcimaDaMeta = 0;
let melhorDia = 0;

for (let dia = 1; dia <= quantidadeDeDias; dia++) {
    const venda = Number(prompt(`Venda do dia ${dia}: `));

    totalVendido += venda;

    // RF04 - Verificar se atingiu a meta diária
    if (venda >= metaDiaria) {
        diasAcimaDaMeta++;
    }

    // RF05 - Descobrir o melhor dia
    if (venda > melhorDia) {
        melhorDia = venda;
    }
}

// RF03 - Média de vendas por dia
const mediaVendas = totalVendido / quantidadeDeDias;

// RF06 - Situação da semana usando operador ternário
const situacaoSemana =
    totalVendido >= metaSemanal
        ? "Meta semanal atingida"
        : "Meta semanal não atingida";

// RF06 - Resumo usando template string
const resumo = `
===== RELATÓRIO DE VENDAS =====
Total vendido: ${totalVendido}
Média diária: ${mediaVendas}
Dias acima da meta: ${diasAcimaDaMeta}
Melhor dia de vendas: ${melhorDia}
Situação da semana: ${situacaoSemana}
`;

console.log(resumo);

// Exportar os dados para os testes automáticos
module.exports = {
    quantidadeDeDias,
    metaDiaria,
    metaSemanal,
    totalVendido,
    mediaVendas,
    diasAcimaDaMeta,
    melhorDia,
    situacaoSemana,
    resumo
};
