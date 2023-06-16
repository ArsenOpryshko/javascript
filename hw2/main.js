//Масиви та об'єкти:
//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
const var1 = [8, 'Arsen', false , true, '123']
console.log(var1)
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
const var2 = {
  title: 'book1', pageCount: 233, genre: 'someGenre1'
};
console.log(var2)

const var3 = {
  title: 'book2', pageCount: 33, genre: 'someGenre2'
};
console.log(var3)

const var4 = {
  title: 'book3', pageCount: 23, genre: 'someGenre3'
};
console.log(var4)

const var5 = {
  title: 'book4', pageCount: 3, genre: 'someGenre4'
};
console.log(var5)
//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
const var6 = {
  title: 'book5', pageCount: 288, genre: 'someGenre5', authors: [
    { name: 'Maks', age: 25},
    { name: 'Alina', age: 18},
      ],
};
console.log(var6)
//- Створити масив з 10 об'єктами які описують сутніть "користувач".
let users = [
  {name: 'vasya', username: 'faden', password: 'qwerty1'},
  {name: 'petya', username: 'fdsdsg', password: 'qwerty2'},
  {name: 'kolya', username: 'gdffg', password: 'qwerty3'},
  {name: 'olya', username: 'kdghkjhsdg', password: 'qwerty4'},
  {name: 'max', username: 'gjhjsg', password: 'qwerty5'},
  {name: 'anya', username: 'flkgjklhdjfg', password: 'qwerty6'},
  {name: 'oleg', username: 'hghdfsg', password: 'qwerty7'},
  {name: 'andrey', username: 'dflghhdfg', password: 'qwerty8'},
  {name: 'masha', username: 'kjhdgk', password: 'qwerty9'},
  {name: 'olya', username: 'olguiortg', password: 'qwerty10'},
  {name: 'max', username: 'oter89iou', password: 'qwerty11'}
];
// Поля: name, username,password. Вивести в консоль пароль кожного користувача
console.log(users[0].password)
// Таких 10


//Логічні розгалуження:
//  - Є змінна х, якій ви надаєте довільне числове значення.
//  Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
const x = 8;
if (x !== 0) {
  console.log('Вірно')
} else {
  console.log('Невірно')
}
//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).
const time = 6;
if (time >= 0 && time <15) {
  console.log('Першу')
}else if (time>= 15 && time < 30)  {
  console.log('Другу')
}else if (time>= 30 && time < 45) {
  console.log('Третю')
}else if (time>= 45 && time < 59)  {
  console.log('Четверту')
}else {
  console.log('Не вірне число')
}

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

const day = 20;

if (day > 1 && day <=10) {
  console.log('Першу')
}else if (day > 10 && day <=20) {
  console.log('Другу')
}else if (day > 20 && day <=31) {
  console.log('Третю')
}else {
  console.log('Не вірне число')
}
//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
const daOfWeek = 4;
switch (daOfWeek){
  case 1:
    console.log('Понеділок')
    break;
  case 2:
    console.log('Вівторок')
    break;
  case 3:
    console.log('Середа')
    break;
  case 4:
    console.log('Четвер')
    break;
  case 5:
    console.log('Пятниця')
    break;
  case 6:
    console.log('Субота')
    break;
  case 7:
    console.log('Неділя')
    break;
  default:
    console.error("ERROR");
}

//  - Користувач вводить або має два числа.
//    Потрібно знайти та вивести максимальне число з тих двох .
//   Також потрібно врахувати коли введені рівні числа.
const number1 = 28
const number2 = 30
if (number1 < number2) {
  console.log("Друге більше", number2)
} else if (number1 > number2) {
  console.log("Перше більше", number1)
} else {
  console.log("Рівні числа")
}
//  - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//    за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let xx = 888888888888;
if (xx === '' || xx === null || xx === undefined || xx === 0) {
  xx = 'default'
}
console.log(xx)

//  - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//  За допомоги іф перевірити кожен його елемент на тривалість навчання.
//  У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
const coursesAndDurationArray = [
  {title: 'JavaScript Complex', monyhDuration: 5},
  {title: 'Java Complex', monyhDuration: 6},
  {title: 'JavaScript Complex', monyhDuration: 6},
  {title: 'Python Complex', monyhDuration: 4},
  {title: 'QA Complex', monyhDuration: 7},
  {title: 'FullStack', monyhDuration: 4},
]
if (coursesAndDurationArray[0].monyhDuration > 5) {
  console.log(coursesAndDurationArray[0].title,'Супер')
}
if (coursesAndDurationArray[1].monyhDuration > 5) {
  console.log(coursesAndDurationArray[1].title,'Супер')
}
if (coursesAndDurationArray[2].monyhDuration > 5) {
  console.log(coursesAndDurationArray[2].title,'Супер')
}
if (coursesAndDurationArray[3].monyhDuration > 5) {
  console.log(coursesAndDurationArray[3].title,'Супер')
}
if (coursesAndDurationArray[4].monyhDuration > 5) {
  console.log(coursesAndDurationArray[4].title,'Супер')
}
if (coursesAndDurationArray[5].monyhDuration > 5) {
  console.log(coursesAndDurationArray[5].title,'Супер')
}
