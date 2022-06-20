const arr = new Array()
const arr2 = new Array(true, "Will", 25, new Array(2, 4, 7))
//console.log(arr2)
arr[0]= "Will"
arr[1]= 25
console.log(arr)
console.log(arr2[3])
//par acessar os indices da array dentro da arr2 coloca-se nais um colchetes
console.log(arr2[3][2])
console.log(arr2[3][arr2[3].length - 1]) //mesma coisa que o de cima
console.log(arr2[1].length)//contou as letras de will

const arr3 = ["Will", 25, [2, 4, 7], false]

arr3[4] = "novo valor"//adicionar mais um novo valor
arr3[arr3.length] = "novo valor 2"//adicionar mais um novo valor
arr3.push("adicionado com push")//metodo especifico do js para adicionar valores

console.log(arr3)
console.log(arr3[2])
console.log(arr3[2][1])
//para acessar algum indice com variavel
let n = 4//numero do indice
console.log(arr3[n])