/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

const array1 = [10, 90, 11, 18, 23, 566, 45, 78, 67, 68, 69];
const array2 = [10, 8, 23, 18, 33, 67, 90, 69, 91, 92, 93, 95];
const commonElements = [];

function findCommonElements(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        if (includesElement(array1, array2[i])) {
            commonElements.push(array2[i]);
        }
    }
    return commonElements;
}

function includesElement(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return true;
        }
    }
    return false;
}

console.log(findCommonElements(array1, array2));