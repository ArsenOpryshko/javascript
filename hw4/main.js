// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function sRect(a, b) {
  return a * b;
}

const sR = sRect(10, 5)
console.log(sR)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function sCir(r) {
  return Math.PI * r ** 2;
}

const rCir = sCir(10)
console.log(rCir)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function sCil(r, h) {
  return Math.PI * 2 * r * h;
}

const rCil = sCil(10, 5)
console.log(rCil)

// - створити функцію яка приймає масив та виводить кожен його елемент
const array = [23, 444, 'khfkds', true]
function arrPrinter(arr) {
  for (const item of arr) {
    console.log(item)
  }
}
arrPrinter(array);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function pCreator(text, esad) {
  document.write(`<${esad}>${text}</${esad}>`)
}
pCreator('Thanks', 'h1')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulCreator1(text) {
  document.write
  (`<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
</ul>`)
}
ulCreator1('Thanks')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulCreator2(text, count) {
  document.write(`<ul>`)
  for (let i = 0; i <count; i++) {
    document.write(`<li>${text}</li>`)
  }
  document.write(`</ul>`)
}
ulCreator2('Hello', 3)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const array2 = [23, 444, 'khfkds', true]
function ulCreator3(arr) {
  document.write(`<ul>`)
  for (const item of arr) {
    document.write(`<li>${item}</li>`)
  }
  document.write(`</ul>`)
}
ulCreator3(array2)
// - створити функцію яка приймає масив об'єктів з наступними полями id,na,me,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31},
    {id: 7, name: 'oleg', age: 28},
    {id: 8, name: 'andrey', age: 29},
    {id: 9, name: 'masha', age: 30},
    {id: 10, name: 'olya', age: 31},
    {id: 11, name: 'max', age: 31}
];
function usersPrinter(arr) {
  for (const user of arr) {
    document.write(`<div>id: ${user.id} - name: ${user.name} - age: ${user.age}</div>`)
    }
}
usersPrinter(users)
// - створити функцію яка повертає найменьше число з масиву
function leastNamber(arr) {
  let least = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < least) {
      least = arr[i];
    }
  }
  return least;
}

let nambers = [10,2,5,8,3];
let least = leastNamber(nambers);
document.write("Найменьше число з масиву: " + least);
document.write(`</br>`);
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  return sum;
}
let arrs = [1, 2, 10];
let total = sum(arrs);
document.write("Сума елементів масиву: " + total);
document.write(`</br>`);
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
}
console.log(swap([11, 22, 33, 44,55,66,77], 0, 6));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency) {
  let exchangeRate = 0;

  for (let i = 0; i < currencyValues.length; i++) {
    if (currencyValues[i].currency === exchangeCurrency) {
      exchangeRate = currencyValues[i].value;
      break;
    }
  }
  return exchangeRate === 0 ? 0 : sumUAH / exchangeRate;
}


let currencyValues = [
  { currency: 'USD', value: 40 },
  { currency: 'EUR', value: 42 }
];

console.log(exchange(10000, currencyValues, 'EUR'));
