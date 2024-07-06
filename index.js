// ARRAY DE OBJETOS

let pessoas = [
    {nome: "Roberto", idade: 33},
    {nome: "Ricardo", idade: 33},
    {nome: "Raphael", idade: 27}
]

// 1) SEM USAR map() - LOOP FOR

let nomeDasPessoas = []
for (let i = 0; i < pessoas.length; i++) {
    nomeDasPessoas.push(pessoas[i].nome);
}

console.log(nomeDasPessoas);

// 2) USANDO map()

let nomeComMap = pessoas.map(function(pessoas){
    return pessoas.nome + " tem " + pessoas.idade + " anos de idade";
})

console.log(nomeComMap);

// 3) SIMPLIFICANDO AINDA MAIS COM ARROW FUNCTIONS

let nomeComMapArrow = pessoas.map(pessoas => pessoas.nome + " tem " + pessoas.idade + " anos de idade");

console.log(nomeComMapArrow);