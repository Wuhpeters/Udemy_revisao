function obtemDiaSemana(){
    return new Date().getDay()//retorna o dia da semana
}

let dia = obtemDiaSemana()

console.log(dia)

console.log(obtemDiaSemana())//mesmo que o de cima, mas sem variavel