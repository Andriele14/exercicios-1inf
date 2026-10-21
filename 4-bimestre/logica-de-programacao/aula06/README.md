# 🎯 Aula 6 — `FOR`: PERCORRENDO E COMBINANDO DADOS

# 🎯 Objetivos da Aula

- Aprofundar o uso do `for` em intervalos maiores.
- Guardar vários valores digitados em um array, usando `push`.
- Combinar o `for` com uma condição dentro do bloco.
- Acumular valores diferentes de acordo com uma regra.
- Perceber como o `for` substitui vários `if` repetidos.

# 🧩 Revisão rápida

Na aula anterior vimos a estrutura do `for`:

```jsx
for (let i = 1; i <= 5; i++) {
  console.log(i)
}
```

Agora vamos usar o `for` para resolver problemas um pouco mais completos, combinando-o com um `if` dentro do bloco.

# 🧠 Combinando `for` com `if`

Imagine que uma loja quer contar quantos dias, dentro de uma semana de vendas, tiveram vendas acima de um valor mínimo.

```jsx
const vendas = [80, 150, 40, 200, 90]

let diasComBoaVenda = 0

for (let i = 0; i < vendas.length; i++) {
  if (vendas[i] >= 100) {
    diasComBoaVenda = diasComBoaVenda + 1
  }
}

console.log(diasComBoaVenda)
```

Passo a passo:

```
vendas[0] = 80  → não conta
vendas[1] = 150 → conta (1)
vendas[2] = 40  → não conta
vendas[3] = 200 → conta (2)
vendas[4] = 90  → não conta
```

Resultado:

```
2
```

# ⌨️ Guardando valores digitados em um array

Quando os dados vêm do terminal, ainda não sabemos os valores antes de rodar o programa. Para guardá-los, criamos um array **vazio** e usamos `.push()` para adicionar cada valor digitado ao final da lista:

```jsx
const prompt = require("prompt-sync")()

const quantidade = Number(prompt("Quantos dias de venda? "))

const vendas = []

for (let i = 1; i <= quantidade; i++) {
  const venda = Number(prompt("Venda do dia " + i + ": "))
  vendas.push(venda)
}

console.log(vendas)
```

Executando com 3 dias:

```
Quantos dias de venda? 3
Venda do dia 1: 80
Venda do dia 2: 150
Venda do dia 3: 40
[ 80, 150, 40 ]
```

Pronto: a lista foi montada **com dados dinâmicos**. Agora podemos percorrê-la com um segundo `for`, combinando com `if`:

```jsx
let diasComBoaVenda = 0

for (let i = 0; i < vendas.length; i++) {
  if (vendas[i] >= 100) {
    diasComBoaVenda = diasComBoaVenda + 1
  }
}

console.log(diasComBoaVenda)
```

Resultado para os valores acima:

```
1
```

> 📌 `const vendas = []` pode receber `.push()` mesmo sendo `const`: o que não pode é trocar a lista inteira por outra. Na próxima aula de arrays veremos o `push` com mais detalhes.

# 🧩 `vendas.length`

Quando o `for` percorre uma lista de valores, usamos `.length` para saber até onde ir, em vez de escrever um número fixo:

```jsx
for (let i = 0; i < vendas.length; i++) {
  console.log(vendas[i])
}
```

Assim, o `for` funciona mesmo que a lista mude de tamanho.

# 💼 Exemplo — Somando só os valores pares

```jsx
let somaPares = 0

for (let numero = 1; numero <= 6; numero++) {
  if (numero % 2 === 0) {
    somaPares = somaPares + numero
  }
}

console.log(somaPares)
```

Passo a passo:

```
1 → ímpar, ignora
2 → par, soma = 0 + 2 = 2
3 → ímpar, ignora
4 → par, soma = 2 + 4 = 6
5 → ímpar, ignora
6 → par, soma = 6 + 6 = 12
```

Resultado:

```
12
```

# 💼 Exemplo — Contando itens acima de um limite

Uma fábrica quer saber quantos lotes, de uma lista, ultrapassaram a meta diária de 50 peças.

```jsx
const producaoDosDias = [45, 60, 50, 70, 30]

let diasAcimaDaMeta = 0

for (let i = 0; i < producaoDosDias.length; i++) {
  if (producaoDosDias[i] > 50) {
    diasAcimaDaMeta = diasAcimaDaMeta + 1
  }
}

console.log(diasAcimaDaMeta)
```

Resultado:

```
2
```

# ⚠️ Cuidado ao combinar `for` e `if`

O `if` dentro do `for` não interrompe a repetição — ele só decide se aquele passo específico conta ou não.

```jsx
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Chegou no 3")
  }
}
```

O `for` continua rodando até `i` chegar a `5`, mesmo depois de passar pelo `3`.

# 🧠 Pensando como desenvolvedor

Quando um problema pede para **contar quantas vezes algo acontece**, ou **somar só alguns valores**, geralmente a solução é:

```
1. Um for que percorre os valores
2. Um if dentro dele, decidindo o que contar/somar
3. Uma variável fora do for, acumulando o resultado
```

Fim da aula!

_

# 🧩 Exercício Rápido

Uma linha de produção registra a quantidade de peças feitas em cada turno. Os dados são **digitados no terminal**.

1. Pergunte quantos turnos serão registrados.
2. Com um `for`, pergunte as peças de cada turno (convertendo com `Number`) e guarde no array com `push`:

```jsx
const pecasPorTurno = []
```

3. Com um **segundo `for`** e um `if`, conte quantos turnos produziram **mais de 15 peças**:

```jsx
let turnosAcimaDaMeta = 0
```

Exemplo no terminal:

```
Quantos turnos? 5
Peças do turno 1: 12
Peças do turno 2: 25
Peças do turno 3: 8
Peças do turno 4: 30
Peças do turno 5: 15
```

A variável `turnosAcimaDaMeta` deverá terminar com o valor:

```
2
```

Utilize obrigatoriamente `for`, `if` e `push`.

Crie o arquivo `index.js`, teste com `node index.js` e exporte a variável `turnosAcimaDaMeta` (`module.exports = turnosAcimaDaMeta`) para que os testes funcionem e o GitHub Actions execute a correção.
