 let n = "global"

 function mostraN(){

    let n = "local"
    console.log("valor de n: " + n)

 }

 mostraN()

 console.log("valor de n: " + n)


 function Ext(){
     let n = "Função externa"
     function Int(){
         let n = "Função interna"
         console.log(n)
     }
     Int()// Função Int só existe dentro da função Ext
     console.log(n)
 }

 Ext()