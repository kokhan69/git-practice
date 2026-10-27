function createPerson(firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: Number(age),
        createdAt: new Date(),
        getGreeting() {
            return `Привет, меня зовут ${this.firstName} ${this.lastName}!`;
        }
    };
}

// Демонстрация работы функции с имитацией ввода данных
const userFirstname = "John";
const userLastname = "Doe";
const userAge = 25;

const newPerson = createPerson(userFirstname, userLastname, userAge);

console.log("Создан новый объект Person:");
console.log(newPerson);
console.log(newPerson.getGreeting());