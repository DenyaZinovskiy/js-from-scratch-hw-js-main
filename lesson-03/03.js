// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(number1, number2, number3) {
    return number1 > number2 && number1 > number3 ? number1 :
        number2 > number1 && number2 > number3 ? number2 : number3
}

console.log(findLargest(9,4,6))