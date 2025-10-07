/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(string) {
    let doubleString = ``
    for (let i = 0; i < string.length; i++) {
        doubleString += string[i];
        doubleString += string[i];
    }
    return doubleString;
}

const result = doubleEachCharacter (`YAREK`)
console.log(result);