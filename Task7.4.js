// Задача 4

// Реализуйте консольное приложение
// Определите иерархию электроприборов.
// Включите некоторые в розетку.
// Посчитайте потребляемую мощность (передайте аргумент).
// Таких приборов должно быть как минимум два.
// Выбрав прибор, подумайте, какими свойствами он обладает.

// План
// Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// Создайте экземпляры каждого прибора.
// Выведите результаты в консоль


function devices(name, power, off){
    this.name = name;
    this.power = power;
    this.off = off;
}

devices.prototype.getOff = function(){
    if (this.off === true) {
        console.log(`${this.name} is off`)
    } else {
        console.log(`${this.name} is on`)
    }
}

devices.prototype.getPower = function(){
    console.log(`This ${this.name} has power ${this.power} watts`)
}

function tableLamp(name, power, off, lampColor){
    this.name = name;
    this.power = power;
    this.off = off;
    this.lampBase = lampColor;
}

tableLamp.prototype = new devices()
tableLamp.prototype.getLampColor = function(){
    console.log(`This ${this.name} lamp has ${this.lampColor} color`)
}

let lamp = new tableLamp('Ultraflash', 12, false, 'black');

function laptop(name, power, off, processor){
    this.name = name;
    this.power = power;
    this.off = off;
    this.processor = processor;
}

laptop.prototype = new devices()
laptop.prototype.getProcessor = function(){
    console.log(` This ${this.name} has  processor ${this.processor}`)
}

let macBook = new laptop('MacBook', 50, false, 'Intel i7');
macBook.getProcessor()
lamp.getLampColor()
macBook.getOff()
lamp.getOff()
macBook.getPower()
lamp.getPower()