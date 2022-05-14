// Задание 1

//Написать функцию, которая принимает в качестве аргумента объект
//и выводит в консоль все ключи и значения только собственных свойств.
//Данная функция не должна возвращать значение

const student = {
    name: "Ivan",
    surname: "Ivanov",
    age: 24,
    position: "Frontend Developer"
};

function getKeysAndValues () {
    for (let key in student) {
        if (student.hasOwnProperty(key)) {
            console.log(`${key} - ${student[key]}`);
        }
    }
}

getKeysAndValues();