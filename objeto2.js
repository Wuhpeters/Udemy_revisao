
const pessoa = {
    nome: "Maria",
    idade: 25,
    sexo: "Feminino"
}

    for(let prop in pessoa){//vai iterar as propriedades de um objeto
       // console.log(prop)//mostra cada propriedade do objeto
        console.log(pessoa[prop])//mostra somente o valor
    }