// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname , email, phone){
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phone = phone;
}
let users = [
  new User(1,`Kevin`,`Walker`,`secrouxauddedoi-1095@yopmail.com`,`380998135433`),
  new User(2,`Frederick`,`Turner`,`peddappitekou-8467@yopmail.com`,`0961852386`),
  new User(3,`Gretchen`,`King`,`yubrikeuwoupre-2713@yopmail.com`,`0503278435`),
  new User(4,`Patrick`,`Coleman`,`hoidenitepro-3240@yopmail.com`,`380922901297`),
  new User(5,`Quilla`,`Washington`,`dougebeutreffu-5022@yopmail.com`,`0966292719`),
  new User(6,`Irene`,`Barnes`,`gragreupecreto-1781@yopmail.com`,`380508980674`),
  new User(7,`Antonio`,`Robinson`,`preufonnoudama-1871@yopmail.com`,`0919548152`),
  new User(8,`Vicky`,`Diaz`,`toikopassoima-2589@yopmail.com`,`380675407829`),
  new User(9,`Briana`,`Henderson`,`cracregaumeiza-2956@yopmail.com`,`0925111734`),
  new User(10,`Solomon`,`Hernandez`,`hapepomimau-3791@yopmail.com`,`380940243461`)
];
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter((user) => !(user.id % 2)));
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(console.log(users.sort((user1, user2) => user1.id - user2.id)));
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class client{
  constructor(id, name, surname , email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
  }
}
let clients = [
  new client(1, `Kevin`, `Walker`, `secrouxauddedoi-1095@yopmail.com`, `380998135433`, [`Veggie Sandwich`, `Beer`, `Cheese`]),
  new client(2, `Frederick`, `Turner`, `peddappitekou-8467@yopmail.com`, `0961852386`, [`Wine`, `Cucumber`, `Mozzarella`,`Apple`]),
  new client(3, `Gretchen`, `King`, `yubrikeuwoupre-2713@yopmail.com`, `0503278435`, [`Bacon Cheeseburger`, `Champagne`]),
  new client(4, `Patrick`, `Coleman`, `hoidenitepro-3240@yopmail.com`, `380922901297`, [`Apple`, `Chicken wing`, `Garlic sauce`]),
  new client(5, `Quilla`, `Washington`, `dougebeutreffu-5022@yopmail.com`, `0966292719`, [`Beef`, `BBQ sauce`, `Carrot`]),
  new client(6, `Irene`, `Barnes`, `gragreupecreto-1781@yopmail.com`, `380508980674`, [`Yogurt`, `Sour cream`, `Apple`]),
  new client(7, `Antonio`, `Robinson`, `preufonnoudama-1871@yopmail.com`, `0919548152`, [`Orange Juice`, `Mozzarella`, `Pineapple`]),
  new client(8, `Vicky`, `Diaz`, `toikopassoima-2589@yopmail.com`, `380675407829`, [`Chili`, `Papaya`]),
  new client(9, `Briana`, `Henderson`, `cracregaumeiza-2956@yopmail.com`, `0925111734`, [`Little Cheeseburger`, `Bacon Cheeseburger`]),
  new client(10, `Solomon`, `Hernandez`, `hapepomimau-3791@yopmail.com`, `380940243461`, [`Egg`, `Cheese`, `Custard`])
];
console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((client1, client2) => client1.order.length - client2.order.length));
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model,producer,year,maxSpeed,engineCapacity){
  this.model = model;
  this.producer = producer;
  this.year = year;
  this.maxSpeed = maxSpeed;
  this.engineCapacity = engineCapacity;
  this.driver = []

  this.drive = function () {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);

  };

  this.info = function () {
    console.log(`----------info----------`);
    console.log(`model ${this.model}`);
    console.log(`producer ${this.producer}`);
    console.log(`year ${this.year}`);
    console.log(`maxSpeed ${this.maxSpeed}`);
    console.log(`engineCapacity ${this.engineCapacity}`);
    console.log(`driver ${JSON.stringify(this.driver)}`);
    console.log(`----------info----------`);
  };

  this.increaseMaxSpeed = function (newSpeed){
    newSpeed = this.maxSpeed + newSpeed;
    this.maxSpeed = newSpeed < 0 ? 0 : newSpeed;
  };


  this.newYear = function (newValue){
    this.year = newValue;
  };

  this.addDriver = function (Driver) {
    this.driver.push(Driver);
  };}


let car = new Car(`Lamborghini Murciélago`,`Lamborghini`,2001,340,6.2)
car.drive()
car.info()

car.increaseMaxSpeed(20)
car.info()

car.newYear(2002)
car.info()

car.addDriver({name: `Vova`, age:21})
car.info()

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car1{
  constructor(model,producer,year,maxSpeed,engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.driver = []
  }


  drive() {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
  };

  info() {
    console.log(`----------1info----------`);
    console.log(`model ${this.model}`);
    console.log(`producer ${this.producer}`);
    console.log(`year ${this.year}`);
    console.log(`maxSpeed ${this.maxSpeed}`);
    console.log(`engineCapacity ${this.engineCapacity}`);
    console.log(`driver ${JSON.stringify(this.driver)}`);
    console.log(`----------1info----------`);
  };

  increaseMaxSpeed(newSpeed){
    newSpeed = this.maxSpeed + newSpeed;
    this.maxSpeed = newSpeed < 0 ? 0 : newSpeed;
  };


  newYear(newValue){
    this.year = newValue;
  };

  addDriver(Driver) {
    this.driver.push(Driver);
  };}

let car1 = new Car1(`Lamborghini Murciélago`,`Lamborghini`,2001,340,6.2)
car1.drive()
car1.info()

car1.increaseMaxSpeed(20)
car1.info()

car1.newYear(2002)
car1.info()

car1.addDriver({name: `Vova`, age:21})
car1.info()
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Popelushka{
  constructor(name,age,foot) {
    this.name = name
    this.age = age
    this.foot = foot
  }
}

class Princ{
  constructor(name,age,boot) {
    this.name = name
    this.age = age
    this.boot = boot
  }
  findPrincess(arr){
    arr = arr.sort((a,b)=>a.age - b.age)
    for (const princess of arr){
      if(princess.foot === this.boot){
        return princess;
      }
    }
  }
  findPrincess1(arr){
    arr = arr.sort((a,b)=>a.age - b.age)
    return arr.find((princess)=>princess.foot === this.boot)
  }
}

let Popelushki = [
  new Popelushka(`Itzel`,21,39),
  new Popelushka(`Emelia`,23,36),
  new Popelushka(`Xanthe`,19,33),
  new Popelushka(`Talia`,24,37),
  new Popelushka(`Aria`,18,36),
  new Popelushka(`Frida`,25,48),
  new Popelushka(`Virginia`,22,34),
  new Popelushka(`Heaven`,20,35),
  new Popelushka(`Rosie`,26,38),
  new Popelushka(`Zelie`,30,36)
];

let prince = new Princ(`Vova`,18,36);


console.log(prince.findPrincess(Popelushki));
console.log(prince.findPrincess1(Popelushki));

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//   За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//   Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
