let string1 =  "hello world";
let string2 =  'lorem ipsum';
let string3 =  'javascript is cool';

console.log(string1.indexOf('d'));
console.log(string2.indexOf('m',7));
console.log(string3.indexOf('l'));

['hello world', 'lorem ipsum', 'javascript is cool'].map((item)=> console.log(item.length));

// - Перевести до великого регістру наступні стрінгові значення

let upperCase1 = string1.toUpperCase();
console.log(upperCase1);
let upperCase2 = string2.toUpperCase();
console.log(upperCase2);
let upperCase3 = string3.toUpperCase();
console.log(upperCase3);

let arr1 = ['hello world', 'lorem ipsum', 'javascript is cool'].map((item)=> item.toUpperCase());
console.log(arr1);
// - Перевести до нижнього регістру настипні стрінгові значення

let lowerCase1 = upperCase1.toLowerCase();
console.log(lowerCase1);
let lowerCase2 = upperCase2.toLowerCase();
console.log(lowerCase2);
let lowerCase3 = upperCase3.toLowerCase();
console.log(lowerCase3);

let arr2 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'].map((item)=> item.toLowerCase());
console.log(arr2);

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string      ';
//Варіант 1
console.log(str .replaceAll(' ','')
  .replaceAll('y','y '));
//Варіант 2
str = str.trim();
console.log(str);

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//let str = 'Ревуть воли як ясла повні';
//let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str2 = 'Ревуть воли як ясла повні';
let arr3 = str2.split(';');
console.log(arr3);

//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arr4 = [10,8,-7,55,987,-1011,0,1050,0];
arr4 = arr4.map(num => num.toString())
console.log(arr4);

//- створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

let nums = [11,21,3];
let sortNums = (nums,direction)  => {
  switch (direction) {
    case 'ascending':
      return  nums.sort((a,b)=> a-b)
    case 'descending':
      return  nums.sort((a,b)=> b-a)
  }
};
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

//- є масив
let coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}];
//  -- відсортувати його за спаданням за monthDuration
let arr5 = coursesAndDurationArray.sort((a,b)=>b.monthDuration-a.monthDuration);
console.log(arr5);
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let arr6 = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(arr6);
//  за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let arr7 = coursesAndDurationArray.map((value,index) => ({ id:index + 1, ...value}));
console.log(arr7);

//описати колоду карт (від 6 до туза без джокерів)
let cards = [
  {cardSuit: 'spade', value: 6, color: 'black'},
  {cardSuit: 'spade', value: 7, color: 'black'},
  {cardSuit: 'spade', value: 8, color: 'black'},
  {cardSuit: 'spade', value: 9, color: 'black'},
  {cardSuit: 'spade', value: 10, color: 'black'},
  {cardSuit: 'spade', value: 'ace', color: 'black'},
  {cardSuit: 'spade', value: 'jack', color: 'black'},
  {cardSuit: 'spade', value: 'queen', color: 'black'},
  {cardSuit: 'spade', value: 'king', color: 'black'},

  {cardSuit: 'clubs', value: 6, color: 'black'},
  {cardSuit: 'clubs', value: 7, color: 'black'},
  {cardSuit: 'clubs', value: 8, color: 'black'},
  {cardSuit: 'clubs', value: 9, color: 'black'},
  {cardSuit: 'clubs', value: 10, color: 'black'},
  {cardSuit: 'clubs', value: 'ace', color: 'black'},
  {cardSuit: 'clubs', value: 'jack', color: 'black'},
  {cardSuit: 'clubs', value: 'queen', color: 'black'},
  {cardSuit: 'clubs', value: 'king', color: 'black'},

  {cardSuit: 'heart', value: 6, color: 'red'},
  {cardSuit: 'heart', value: 7, color: 'red'},
  {cardSuit: 'heart', value: 8, color: 'red'},
  {cardSuit: 'heart', value: 9, color: 'red'},
  {cardSuit: 'heart', value: 10, color: 'red'},
  {cardSuit: 'heart', value: 'ace', color: 'red'},
  {cardSuit: 'heart', value: 'jack', color: 'red'},
  {cardSuit: 'heart', value: 'queen', color: 'red'},
  {cardSuit: 'heart', value: 'king', color: 'red'},

  {cardSuit: 'diamond', value: 6, color: 'red'},
  {cardSuit: 'diamond', value: 7, color: 'red'},
  {cardSuit: 'diamond', value: 8, color: 'red'},
  {cardSuit: 'diamond', value: 9, color: 'red'},
  {cardSuit: 'diamond', value: 10, color: 'red'},
  {cardSuit: 'diamond', value: 'ace', color: 'red'},
  {cardSuit: 'diamond', value: 'jack', color: 'red'},
  {cardSuit: 'diamond', value: 'queen', color: 'red'},
  {cardSuit: 'diamond', value: 'king', color: 'red'},];
//- знайти піковий туз
let cards1 = cards.find((card)=> card.cardSuit === 'spade' && card.value === `ace`);
console.log(cards1);
//- всі шістки
let cards2 = cards.filter((card) => card.value===6);
console.log(cards2);
//- всі червоні карти
let cards3 = cards.filter((card) => card.color==='red');
console.log(cards3);
//- всі буби
let cards4 = cards.filter((card) => card.cardSuit==='diamond');
console.log(cards4);
//- всі трефи від 9 та більше
let cards5 = cards.filter((card) => card.cardSuit === 'clubs' &&
  [9,10,'ace','jack','queen','king'].includes(card.value));
console.log(cards5);

//    Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
//{
//    spades:[],
//    diamonds:[],
//    hearts:[],
//    clubs:[]
//}
//Варіант 1
let cards6 = cards.reduce((acc, cu)=>{
  switch (cu.cardSuit) {
    case 'spade':
      acc.spades.push(cu);
      break;
    case 'diamond':
      acc.diamonds.push(cu);
      break;
    case 'heart':
      acc.hearts.push(cu);
      break;
    case 'clubs':
      acc.clubs.push(cu);
      break;
  }
  return acc;
},{spades:[], diamonds:[], hearts:[], clubs:[]})
console.log(cards6);
//Варіант 2
let cards7 = cards.reduce((acc,cu)=>{
  acc[cu.cardSuit].push(cu);
  return acc;
},{spade:[], diamond:[], heart:[], clubs:[]});
console.log(cards7);


//взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
  {
    title: 'JavaScript Complex',
    monthDuration: 5,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
  },
  {
    title: 'Java Complex',
    monthDuration: 6,
    hourDuration: 909,
    modules: ['html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'angular',
      'aws',
      'docker',
      'git',
      'java core',
      'java advanced']
  },
  {
    title: 'Python Complex',
    monthDuration: 6,
    hourDuration: 909,
    modules: ['html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'angular',
      'aws',
      'docker',
      'python core',
      'python advanced']
  },
  {
    title: 'QA Complex',
    monthDuration: 4,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
  },
  {
    title: 'FullStack',
    monthDuration: 7,
    hourDuration: 909,
    modules: ['html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'react',
      'angular',
      'aws',
      'docker',
      'git',
      'node.js',
      'python',
      'java']
  },
  {
    title: 'Frontend',
    monthDuration: 4,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
  }
];
//--написати пошук всіх об'єктів, в який в modules є sass
let arr8 = coursesArray.filter((value)=> value.modules.includes('sass'));
console.log(arr8);
//--написати пошук всіх об'єктів, в який в modules є docker
let arr9 = coursesArray.filter((value)=> value.modules.includes('docker'));
console.log(arr9);

