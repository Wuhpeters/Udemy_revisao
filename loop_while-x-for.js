//numeros randomicos(aleatorios) não repetidos
//neste caso, vemos que while é melhor
//indexOf localiza numeros e caracteres dentro de uma array e informa o indice que se encontra
//lastIndexOf ultimo numero

function FNumRand(max){
    return parseInt(Math.random() * max)//max é o maximo que pode receber

}

let arr = []//array vazio
while(arr.length <= 20){//ler 20 numeros randomicos(aleatorios)
    let randNumb = FNumRand(30)// 30 atribuido como valor maximo// vai gerar o maximo de 30 valores
    console.log(randNumb)

    if(arr.indexOf(randNumb) < 0){//quando indexOf -1 é pq não foi encontrado
        //entao esta linha garante que não se repetira os numeros
        arr.push(randNumb)//irá colocar o numero NÃO REPETIDO dentro da array
    }
}

console.log(arr)