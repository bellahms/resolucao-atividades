/*
Uma comerciante comprou alguns produtos e quer revender com lucro de 45% se o valor da compra foi menor que 20 reais. 
Caso contrário, o lucro será de 30%. O valor deve ser passado para o programa que deverá retornar o valor da venda.
*/

let valorCompra = 19;
const valorMínimo = 20;
const lucroMaior = 45;
const lucroMenor = 30;

if (valorCompra < valorMínimo) {
    console.log (`O valor da revenda será de ${( lucroMaior * valorCompra / 100) + valorCompra}`)
} else {console.log (`O valor da revenda será de ${( lucroMenor * valorCompra / 100 ) + valorCompra}`)}

if (valorCompra >= valorMínimo) {
    console.log (`O valor da revenda será de ${( lucroMaior * valorCompra / 100) + valorCompra}`)
} else {console.log (`O valor da revenda será de ${( lucroMenor * valorCompra / 100 ) + valorCompra}`)}