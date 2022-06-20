const pessoas = [{//array com 3 objetos dentro
    nome: "William",
    id: 25
},{
nome: "Amanda",
id: 29
},{
nome: "Ayla",
id: 1
}]

for(let i=0; i<pessoas.length; i++){
    console.log(`${pessoas[i].nome} possui ${pessoas[i].id} anos`)
}