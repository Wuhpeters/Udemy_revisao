const produto = {
    nome: "Caneta",
    qntd: 10,
    comprar(n){//metodo, pode ser escrito assim tambem //comprar : function(n){}
                        //metodo é uma função atrelada a uma propriedade de um objeto
             console.log(this)
            if(n > this.qntd){//this, nesse caso, faz uma referencia a esse objeto 
                  return "Quantidade não disponivel"  //return vai sair da função
            }
            this.qntd -=n
    }
}

produto.comprar(5)//chama a função ja atribuindo valor a n
console.log(produto)

produto.comprar(15)//não alterou a quantidade pois o valor foi maior do que tinha
console.log(produto)