// Задание 2

// Написать функцию, которая принимает в качестве аргументов объект и строку,
// а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false
const person = {
    name: 'Peter',
    surname: 'Sidorov',
    age: 35,
    position: 'manager'
};

const str = 'position';

function checkObj(a1, a2){
    if(a1 in a2){
        return true;
    }
    else{
        return false;
    }
}
console.log(checkObj(str, person));
