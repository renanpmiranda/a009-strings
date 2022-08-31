const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres:\"BOAS VINDAS, mas não deixe o gato sair\""

const novaFrase = frase.replace("verde", "rosa")//.replace("azul", "laranja")
const novaFrase2 = novaFrase.replace("azul", "laranja")

console.log(novaFrase2)
console.log(novaFrase2.includes("verde") && novaFrase2.includes("laranja"))
console.log(novaFrase2.replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR"))